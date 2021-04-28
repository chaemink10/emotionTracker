import React, { useEffect, useState } from 'react';
import EmotionList from './EmotionList';
import style from './emotion.module.css';

const Emotion = ({ tracker, emotion, onUpdate, onCheck, onDeleteEmotion }) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setEdit(false);
  }, []);

  //emtion edit mode
  const onEdit = () => {
    edit && setEdit(false);
    !edit && setEdit(true);
  };
  return (
    <section className={style.emotion}>
      <button type='button' onClick={onEdit} className={style.editBtn}>
        <i className='far fa-edit'></i>
        Edit {edit === true ? 'On' : 'Off'}
      </button>
      <h2 className={style.title}>
        <span>
          추가한 Emotion을 클릭해보세요! <i className='fas fa-heartbeat'></i>
        </span>
      </h2>
      <h3 className={style.guide}>
        <span className={style.tip}>Tip</span>
        Emotion을 클릭하면 감정을 상세하게 작성할 수 있어요!
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
                onDeleteEmotion={onDeleteEmotion}
                edit={edit}
              ></EmotionList>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Emotion;
