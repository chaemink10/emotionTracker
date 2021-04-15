import React from 'react';
import EmotionList from './EmotionList';
import style from './emotion.module.css';

const Emotion = ({ tracker, emotion, onUpdate, onCheck }) => {
  const onEdit = () => {
    alert('Edit 준비중! 🥲');
  };
  return (
    <>
      <h3 className={style.title}>
        Emotion을 클릭하면 세부감정을 작성할 수 있어요!
        <button type='button' onClick={onEdit} className={style.editBtn}>
          <i className='far fa-edit'></i>
        </button>
      </h3>
      <ul className={style.emotionList}>
        {Object.keys(emotion).map((key) => {
          return (
            <li key={emotion[key].id}>
              <EmotionList
                tracker={tracker}
                emotion={emotion[key]}
                onUpdate={onUpdate}
                onCheck={onCheck}
              ></EmotionList>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Emotion;
