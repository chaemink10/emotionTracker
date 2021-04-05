import React, { memo, useRef } from 'react';
import { uid } from 'uid';
import style from './trackerDescription.module.css';

const DescriptionList = memo(({ tracker, onUpdate }) => {
  const idRef = useRef();
  const descList = tracker.description;

  const onDescDelete = () => {
    const updatedDesc = descList.filter((desc) => {
      return desc.id !== idRef.current.value;
    });
    tracker.description = updatedDesc;
    onUpdate(tracker);
  };

  return (
    <ul className={style.descList}>
      {descList.map((desc) => (
        <li key={uid()}>
          {desc.text}
          <input
            className={style.blind}
            ref={idRef}
            value={desc.id}
            readOnly
          ></input>
          <button
            type='button'
            className={style.deleteBtn}
            onClick={onDescDelete}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
});

export default DescriptionList;
