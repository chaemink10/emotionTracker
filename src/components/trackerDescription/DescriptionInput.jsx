import React, { useRef } from 'react';
import style from './trackerDescription.module.css';

const DescriptionInput = ({ tracker, onUpdate }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const inputDesc = inputRef.current.value;
    const trackerDesc = [...tracker.description, inputDesc];
    const updated = { ...tracker, description: trackerDesc };
    inputDesc && onUpdate(updated);
    formRef.current.reset();
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className={style.trackerDesc}>
        <input
          type='text'
          className={style.input}
          placeholder='Write your feelings in a row simply.'
          ref={inputRef}
        ></input>
        <button type='submit' className={style.inputBtn}>
          {tracker.emotion}
        </button>
      </div>
    </form>
  );
};

export default DescriptionInput;
