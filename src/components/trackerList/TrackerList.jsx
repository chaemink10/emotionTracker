import React, { memo } from 'react';
import DescriptionConts from '../trackerDescription/DescriptionConts';
import style from './trackerList.module.css';
import '@fortawesome/fontawesome-free/js/all.js';

const TrackerList = memo(({ onDelete, onUpdate, tracker }) => {
  //Click Delete
  const onClickDelete = () => {
    onDelete(tracker);
  };

  return (
    <li>
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
