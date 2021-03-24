import React from 'react';
import { uid } from 'uid';
import style from './trackerDescription.module.css';

const DescriptionList = ({ tracker }) => {
  const descList = tracker.description;
  return (
    <ul className={style.descList}>
      {descList.map((desc) => (
        <li key={uid()}>{desc}</li>
      ))}
    </ul>
  );
};

export default DescriptionList;
