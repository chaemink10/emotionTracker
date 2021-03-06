import React, { useRef } from 'react';
import { uid } from 'uid';
import style from './emotion.module.css';

const EmotionList = ({
  tracker,
  emotion,
  onUpdate,
  onCheck,
  onDeleteEmotion,
  edit,
}) => {
  const btnRef = useRef();

  const onButtonClick = (event) => {
    //중복체크
    const addEmotion =
      tracker &&
      Object.keys(tracker).filter((key) => {
        return tracker[key].emotionId === emotion.id;
      });

    if (addEmotion && addEmotion.length > 0) {
      alert('이미 추가된 Emotion이에요! 😅');
    } else {
      const addTracker = {
        id: uid(),
        emotion: event.target.innerText,
        emotionId: emotion.id,
        count: 0,
        description: [],
      };
      onUpdate(addTracker);
    }
    onCheck(emotion.id);
  };

  const onClickDelete = () => {
    onDeleteEmotion(emotion);
  };

  return (
    <div className={style.emotionTag}>
      <button
        type='button'
        className={style.emotionButton}
        onClick={onButtonClick}
        ref={btnRef}
      >
        {emotion.emotion}
      </button>
      {edit && (
        <span className={style.emotionDelete} onClick={onClickDelete}>
          <i className='fas fa-times'></i>
        </span>
      )}
    </div>
  );
};

export default EmotionList;
