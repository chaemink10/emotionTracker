import React, { useRef } from 'react';
import style from './registerInput.module.css';

const RegisterInput = ({ onGetRef, onLogin, styleName }) => {
  let emailRef = useRef();
  let pwRef = useRef();

  const onChange = () => {
    emailRef.current.value &&
      pwRef.current.value &&
      onGetRef(emailRef.current.value, pwRef.current.value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onLogin();
    }
  };

  return (
    <div className={`${getStyle(styleName)}`} onKeyPress={onKeyPress}>
      <input
        type='email'
        ref={emailRef}
        placeholder='email'
        onChange={onChange}
        className={style.input}
      ></input>
      <input
        type='password'
        ref={pwRef}
        placeholder='password'
        onChange={onChange}
        className={style.input}
      ></input>
    </div>
  );
};

function getStyle(styleName) {
  if (styleName === 'newInput') {
    return style.newInput;
  } else if (styleName === 'loginInput') {
    return style.loginInput;
  }
}

export default RegisterInput;
