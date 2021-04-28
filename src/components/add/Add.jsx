import React, { useRef } from 'react';
import { uid } from 'uid';
import style from './add.module.css';

const Add = ({ onAddEmotion }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const addTracker = {
      id: uid(),
      emotion: inputRef.current.value,
      description: [],
    };
    inputRef.current.value && onAddEmotion(addTracker);
    formRef.current.reset();
  };
  return (
    <section className={style.add}>
      <h3 className={style.title}>오늘 느낀 Emotion을 추가하세요! 👧🏻</h3>
      {/* <p className={style.example}>
        ex) 행복😍 <span className={style.orText}>또는</span> 슬픔😭{' '}
        <span className={style.orText}>또는</span> 당황😳{' '}
      </p> */}
      <form ref={formRef}>
        <input
          type='text'
          placeholder='ex) 놀람 😲 '
          ref={inputRef}
          className={style.input}
        ></input>
        <button onClick={onSubmit} className={style.btn}>
          추가
        </button>
      </form>
    </section>
  );
};

export default Add;
