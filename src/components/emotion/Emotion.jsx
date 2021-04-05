import React from 'react';
import EmotionList from './EmotionList';
import style from './emotion.module.css';

const Emotion = (props) => {
  return (
    <ul className={style.emotionList}>
      <EmotionList></EmotionList>
    </ul>
  );
};

export default Emotion;
