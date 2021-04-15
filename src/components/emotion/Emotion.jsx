import React from 'react';
import EmotionList from './EmotionList';
import style from './emotion.module.css';

const Emotion = ({ emotion, onUpdate }) => {
  const onEdit = () => {
    alert('Edit 준비중! 🥲');
  };
  return (
    <>
      <h3 className={style.title}>Emotion List</h3>
      <button type='button' onClick={onEdit} className={style.editBtn}>
        <i className='far fa-edit'></i>
      </button>
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
