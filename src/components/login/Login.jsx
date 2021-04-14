import React, { useEffect } from 'react';
import style from './login.module.css';
import { useHistory } from 'react-router-dom';
import Register from '../registerForm/RegisterForm';

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
        <h2>Your Emotion 😉</h2>
        <Register authService={authService} btnType={'login'}></Register>
        <span className={style.otherTxt}>Or Sign Up Using</span>
        <div className={style.otherLogin}>
          <button type='button' onClick={onClick} className={style.googleBtn}>
            <i className='fab fa-google'></i>
            Google
          </button>
          <button type='button' onClick={onClick} className={style.githubBtn}>
            <i className='fab fa-github'></i>
            Github
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
