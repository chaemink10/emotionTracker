import React, { memo } from 'react';
import TrackerList from './TrackerList';
import style from './trackerList.module.css';

const Tracker = memo(({ tracker, onDelete, onUpdate }) => {
  return (
    <ul className={style.trackerList}>
      {Object.keys(tracker).map((key) => {
        return (
          <TrackerList
            key={key}
            onDelete={onDelete}
            onUpdate={onUpdate}
            tracker={tracker[key]}
          ></TrackerList>
        );
      })}
    </ul>
  );
});

export default Tracker;
