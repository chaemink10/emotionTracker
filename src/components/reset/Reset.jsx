import React from 'react';
import style from './reset.module.css';

const Reset = ({ onHandleReset }) => {
  const onClickReset = () => {
    onHandleReset();
  };

  return (
    <button type='button' className={style.reset} onClick={onClickReset}>
      reset
    </button>
  );
};

export default Reset;
