import React, { useEffect } from 'react';
import style from './login.module.css';
import { useHistory } from 'react-router-dom';

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
  return (
    <div className={style.login}>
      <section className={style.box}>
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
