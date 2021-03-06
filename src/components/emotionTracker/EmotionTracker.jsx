import React from 'react';
import Header from '../header/Header';
import Add from '../add/Add';
import Tracker from '../trackerList/Tracker';
import { useEffect, useState } from 'react';
import Emotion from '../emotion/Emotion';
import { uid } from 'uid';
import { useHistory } from 'react-router';

const EmotionTracker = ({ firebase, authService }) => {
  // const [trackerTotalCount, setTrackerTotalCount] = useState(0);
  const [tracker, setTracker] = useState();
  const [emotion, setEmotion] = useState();
  const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const [addEmotionCheck, setAddEmotionCheck] = useState();
  const history = useHistory();

  //Checking Login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUser(user.uid);
        setUserName(user.displayName ? user.displayName : user.email);
      } else {
        history.push('/');
      }
    });
  });

  //Load Tracking List
  useEffect(() => {
    const loaded = firebase.load(
      (result) => {
        setTracker(result);
        // setTrackerTotalCount(Object.keys(result).length);
      },
      'tracker',
      user
    );
    return () => loaded();
  }, [firebase, user]);

  //Load Emotion List
  useEffect(() => {
    const loaded = firebase.load(
      (result) => {
        setEmotion(result);
      },
      'emotion',
      user
    );
    return () => loaded();
  }, [firebase, user]);

  //Add & Update
  const onUpdate = (update) => {
    setTracker((tracker) => {
      const updatedTracker = { ...tracker };
      updatedTracker[update.id] = update;
      return updatedTracker;
    });
    firebase.save(update, user);
  };

  //Delete
  const onDelete = (deleteTracker) => {
    setTracker((tracker) => {
      Object.keys(tracker).filter((key) => key !== deleteTracker.id);
    });
    firebase.remove(deleteTracker, user);
  };

  //Add New Emotion
  const onAddEmotion = (add) => {
    const addEmotion = {
      id: uid(),
      emotion: add.emotion,
    };
    firebase.saveEmotion(addEmotion, user);
  };

  //Delete Emotion
  const onDeleteEmotion = (deleteEmotion) => {
    setEmotion((emotion) => {
      Object.keys(emotion).filter((key) => key === deleteEmotion.id);
    });
    firebase.removeEmotion(deleteEmotion, user);
  };

  const onLogout = () => {
    authService.logout();
  };

  const onCheck = (emotionID) => {
    emotionID && setAddEmotionCheck(emotionID);
  };

  return (
    <>
      <Header onLogout={onLogout} userName={userName}></Header>
      <Add onAddEmotion={onAddEmotion}></Add>
      {emotion && (
        <Emotion
          tracker={tracker}
          emotion={emotion}
          onUpdate={onUpdate}
          onCheck={onCheck}
          onDeleteEmotion={onDeleteEmotion}
        ></Emotion>
      )}
      {tracker && (
        <Tracker
          tracker={tracker}
          onDelete={onDelete}
          onUpdate={onUpdate}
          addEmotionCheck={addEmotionCheck}
        ></Tracker>
      )}
    </>
  );
};

export default EmotionTracker;
