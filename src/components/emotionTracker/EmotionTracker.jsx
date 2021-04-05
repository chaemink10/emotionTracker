import React from 'react';
import Header from '../header/Header';
import Add from '../add/Add';
import Tracker from '../trackerList/Tracker';
// import Reset from '../reset/Reset';
import { useEffect, useState } from 'react';
import Emotion from '../emotion/Emotion';
import { uid } from 'uid';

const EmotionTracker = ({ firebase }) => {
  const [trackerTotalCount, setTrackerTotalCount] = useState(0);
  const [tracker, setTracker] = useState({});
  const [emotion, setEmotion] = useState({});

  //Load Tracking List
  useEffect(() => {
    const loaded = firebase.load((result) => {
      setTracker(result);
      setTrackerTotalCount(Object.keys(result).length);
    }, 'tracker');
    return () => loaded();
  }, [firebase]);

  //Load Emotion List
  useEffect(() => {
    const loaded = firebase.load((result) => {
      setEmotion(result);
    }, 'emotion');
    return () => loaded();
  }, [firebase]);

  //Add & Update
  const onUpdate = (update) => {
    setTracker((tracker) => {
      const updatedTracker = { ...tracker };
      updatedTracker[update.id] = update;
      return updatedTracker;
    });
    firebase.save(update);
  };

  //Delete
  const onDelete = (deleteTracker) => {
    setTracker((tracker) => {
      Object.keys(tracker).filter((key) => key !== deleteTracker.id);
    });
    firebase.remove(deleteTracker);
  };

  //Add New Emotion
  const onAddEmotion = (add) => {
    onUpdate(add);
    const addEmotion = {
      id: uid(),
      emotion: add.emotion,
    };
    firebase.saveEmotion(addEmotion);
  };

  return (
    <>
      <Header trackerTotalCount={trackerTotalCount}></Header>
      <Add onAddEmotion={onAddEmotion}></Add>
      <Emotion emotion={emotion} onUpdate={onUpdate}></Emotion>
      {tracker && (
        <Tracker
          tracker={tracker}
          onDelete={onDelete}
          onUpdate={onUpdate}
        ></Tracker>
      )}
    </>
  );
};

export default EmotionTracker;
