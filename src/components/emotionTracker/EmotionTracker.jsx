import React from 'react';
import Header from '../header/Header';
import Add from '../add/Add';
import Tracker from '../trackerList/Tracker';
// import Reset from '../reset/Reset';
import { useEffect, useState } from 'react';

const EmotionTracker = ({ firebase }) => {
  const [trackerTotalCount, setTrackerTotalCount] = useState(0);
  const [tracker, setTracker] = useState({});

  useEffect(() => {
    const loaded = firebase.load((result) => {
      setTracker(result);
    });
    tracker && setTrackerTotalCount(Object.keys(tracker).length);
    return () => loaded();
  }, [firebase, tracker]);

  //Add & Update
  const onUpdate = (add) => {
    setTracker((tracker) => {
      const updated = { ...tracker };
      updated[add.id] = add;
      return updated;
    });
    firebase.save(add);
  };

  //Delete
  const onDelete = (deleteTracker) => {
    setTracker((tracker) => {
      Object.keys(tracker).filter((key) => key !== deleteTracker.id);
    });
    firebase.remove(deleteTracker);
  };

  return (
    <>
      <Header trackerTotalCount={trackerTotalCount}></Header>
      <Add onUpdate={onUpdate}></Add>
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
