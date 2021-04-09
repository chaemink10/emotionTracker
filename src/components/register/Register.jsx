import React, { useRef } from 'react';
import { useHistory } from 'react-router';
// import style from './register.module.css';

const Register = ({ authService, btnType }) => {
  let emailRef = useRef();
  let pwRef = useRef();
  const history = useHistory();

  const goEmotion = (userId) => {
    history.push({
      pathname: '/emotion',
      state: { id: userId },
    });
  };

  const onRegister = () => {
    authService
      .onAccountRegist(emailRef.current.value, pwRef.current.value)
      .then((result) => {
        goEmotion(result.user.uid);
      })
      .catch((error) => {
        alert(error.message);
        emailRef.current.value = '';
      });
  };

  const onLogin = () => {
    authService
      .onAccountLogin(emailRef.current.value, pwRef.current.value)
      .then((result) => {
        goEmotion(result.user.uid);
      })
      .catch((error) => {
        alert(error.message);
        emailRef.current.value = '';
      });
  };

  return (
    <div>
      <input type='email' ref={emailRef} placeholder='email'></input>
      <input type='password' ref={pwRef} placeholder='password'></input>
      {btnType === 'reg' ? (
        <button type='button' onClick={onRegister}>
          회원가입
        </button>
      ) : (
        <button type='button' onClick={onLogin}>
          로그인
        </button>
      )}
    </div>
  );
};

export default Register;
