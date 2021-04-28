import React, { memo } from 'react';
import TrackerList from './TrackerList';
import style from './trackerList.module.css';

const Tracker = memo(({ tracker, onDelete, onUpdate, addEmotionCheck }) => {
  return (
    <section className={style.tracker}>
      <h2 className={style.title}>
        <span>왜 그런 Emotion을 느꼈나요?</span>
      </h2>
      <p className={style.guide}>
        <span className={style.tip}>Tip</span>천천히 생각하여 기록해 보세요 ✍🏻
      </p>
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
    </section>
  );
});

export default Tracker;
