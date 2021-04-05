import React from 'react';
import EmotionList from './EmotionList';
import style from './emotion.module.css';

const Emotion = ({ emotion, onUpdate }) => {
  return (
    <>
      <h3 className={style.title}>Emotion List</h3>
      <ul className={style.emotionList}>
        {Object.keys(emotion).map((key) => {
          return (
            <li key={emotion[key].id}>
              <EmotionList
                emotion={emotion[key]}
                onUpdate={onUpdate}
              ></EmotionList>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Emotion;
