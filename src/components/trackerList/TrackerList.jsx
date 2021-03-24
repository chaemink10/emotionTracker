import React, { memo } from 'react';
import DescriptionConts from '../trackerDescription/DescriptionConts';
import style from './trackerList.module.css';

const TrackerList = memo(({ onDelete, onUpdate, tracker }) => {
  //Click Delete
  const onClickDelete = () => {
    onDelete(tracker);
  };

  return (
    <li>
      <div className={style.trackerSection}>
        <div className={style.trackerName}>{tracker.emotion}</div>
        <div className={style.count}>{tracker.count}</div>
        <button
          type='button'
          className={`${style.delete} ${style.btn}`}
          onClick={onClickDelete}
        >
          삭제
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
