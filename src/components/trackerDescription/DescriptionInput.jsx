import React, { useRef } from 'react';
import { uid } from 'uid';
import style from './trackerDescription.module.css';

const DescriptionInput = ({ tracker, onUpdate }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    let inputDesc = []; //Description Text
    let trackerDesc = []; //Updated Description Array

    inputDesc['text'] = inputRef.current.value;
    inputDesc['id'] = uid();

    if (tracker.description) {
      trackerDesc = [...tracker.description, inputDesc];
    } else {
      trackerDesc = [inputDesc];
    }
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
          +
        </button>
      </div>
    </form>
  );
};

export default DescriptionInput;
