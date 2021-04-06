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
      <form ref={formRef}>
        <input
          type='text'
          placeholder='Add Your Emotion'
          ref={inputRef}
        ></input>
        <button onClick={onSubmit} className={style.btn}>
          Add
        </button>
      </form>
    </section>
  );
};

export default Add;
