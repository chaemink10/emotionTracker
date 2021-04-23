import React from 'react';
import EmotionList from './EmotionList';
import style from './emotion.module.css';

const Emotion = ({ tracker, emotion, onUpdate, onCheck }) => {
  const onEdit = () => {
    alert('Edit 준비중! 🥲');
  };
  return (
    <section className={style.emotion}>
      <h2 className={style.title}>
        <span>
          감정을 클릭해보세요!<i className='fas fa-heartbeat'></i>
        </span>
      </h2>
      <h3 className={style.guide}>
        <span className={style.tip}>Tip</span>Emotion을 클릭하면 세부감정을
        작성할 수 있어요!
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
    </section>
  );
};

export default Emotion;
