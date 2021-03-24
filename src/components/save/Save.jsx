import React from 'react';

const Save = ({ onHandleSave }) => {
  const onClickSave = () => {
    onHandleSave();
  };

  return (
    <button type='button' onClick={onClickSave}>
      저장
    </button>
  );
};

export default Save;
