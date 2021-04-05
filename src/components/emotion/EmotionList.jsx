import React, { useRef } from 'react';
import { uid } from 'uid';
import style from './emotion.module.css';

const EmotionList = ({ emotion, onUpdate }) => {
  const btnRef = useRef();

  const onButtonClick = (event) => {
    const addTracker = {
      id: uid(),
      emotion: event.target.innerText,
      count: 0,
      description: [],
    };
    onUpdate(addTracker);
  };

  return (
    <button
      type='button'
      className={style.emotionButton}
      onClick={onButtonClick}
      ref={btnRef}
    >
      {emotion.emotion}
    </button>
  );
};

export default EmotionList;
