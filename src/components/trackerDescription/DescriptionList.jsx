import React, { memo } from 'react';
import { uid } from 'uid';
import style from './trackerDescription.module.css';

const DescriptionList = memo(({ tracker, onUpdate }) => {
  const descList = tracker.description;

  const onDescDelete = (updated) => {
    const updatedDesc = descList.filter((desc) => {
      return desc.id !== updated.id;
    });
    tracker.description = updatedDesc;
    onUpdate(tracker);
  };

  return (
    <ul className={style.descList}>
      {descList.map((desc) => (
        <Descriptions
          desc={desc}
          onDelete={onDescDelete}
          key={uid()}
        ></Descriptions>
      ))}
    </ul>
  );
});

const Descriptions = ({ desc, onDelete }) => {
  const onClick = () => {
    onDelete(desc);
  };

  return (
    <li>
      {desc.text}
      <span className={style.date}>{desc.date}</span>
      <button type='button' className={style.deleteBtn} onClick={onClick}>
        X
      </button>
    </li>
  );
};
export default DescriptionList;
