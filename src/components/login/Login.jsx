import React, { useEffect } from 'react';
import style from './login.module.css';
import { useHistory } from 'react-router-dom';
import Register from '../register/Register';

const Login = ({ authService }) => {
  const history = useHistory();

  const goEmotion = (userId) => {
    history.push({
      pathname: '/emotion',
      state: { id: userId },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goEmotion(user.uid);
    });
  });

  const onClick = (event) => {
    authService
      .login(event.target.outerText)
      .then((result) => {
        goEmotion(result.user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //회원가입
  const onRegister = () => {
    history.push({
      pathname: '/register',
    });
  };

  return (
    <div className={style.login}>
      <section className={style.box}>
        <Register authService={authService} btnType={'login'}></Register>
        <button type='button' onClick={onRegister}>
          회원가입
        </button>
        <button type='button' onClick={onClick}>
          Google
        </button>
        <button type='button' onClick={onClick}>
          Github
        </button>
      </section>
    </div>
  );
};

export default Login;
