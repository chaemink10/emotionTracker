import React, { memo } from 'react';
import TrackerList from './TrackerList';
import style from './trackerList.module.css';

const Tracker = memo(({ tracker, onDelete, onUpdate, addEmotionCheck }) => {
  return (
    <>
      <h2 className={style.trackerTit}>
        왜 그런 감정을 느꼈는지 천천히 생각하여 기록해 보세요 ✍🏻
      </h2>
      <ul className={style.trackerList}>
        {Object.keys(tracker).map((key) => {
          return (
            <TrackerList
              key={key}
              onDelete={onDelete}
              onUpdate={onUpdate}
              tracker={tracker[key]}
              addEmotionCheck={addEmotionCheck}
            ></TrackerList>
          );
        })}
      </ul>
    </>
  );
});

export default Tracker;
