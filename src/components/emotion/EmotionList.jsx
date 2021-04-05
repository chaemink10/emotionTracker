import React from 'react';
import style from './emotion.module.css';

const EmotionList = (props) => (
  <>
    <li>
      <button type='button' className={style.emotionButton}>
        Sad 😭
      </button>
    </li>
    <li>
      <button type='button' className={style.emotionButton}>
        Surprise 🤭
      </button>
    </li>
  </>
);

export default EmotionList;
