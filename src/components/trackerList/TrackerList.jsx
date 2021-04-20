import React, { memo, useEffect } from 'react';
import DescriptionConts from '../trackerDescription/DescriptionConts';
import style from './trackerList.module.css';
import '@fortawesome/fontawesome-free/js/all.js';

const TrackerList = memo(({ onDelete, onUpdate, tracker, addEmotionCheck }) => {
  //Click Delete
  const onClickDelete = () => {
    onDelete(tracker);
  };

  //중복입력된 항목으로 Scroll
  useEffect(() => {
    const element = document.getElementById(addEmotionCheck);
    addEmotionCheck &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
  }, [addEmotionCheck]);

  return (
    <li id={tracker.emotionId}>
      <div className={style.trackerSection}>
        <div className={style.trackerName}>{tracker.emotion}</div>
        <div className={style.count}>
          {tracker.description ? tracker.description.length : 0}
        </div>
        <button type='button' className={style.delete} onClick={onClickDelete}>
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
      <div>
        <DescriptionConts
          tracker={tracker}
          onUpdate={onUpdate}
        ></DescriptionConts>
      </div>
    </li>
  );
});

export default TrackerList;
