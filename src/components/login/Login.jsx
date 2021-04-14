import React, { useEffect, useState } from 'react';
import style from './login.module.css';
import { useHistory } from 'react-router-dom';
import RegisterInput from '../registerInput/RegisterInput';

const Login = ({ authService }) => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState();

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

  //Google, Github Login
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

  //회원가입 링크이동
  const onLinkRegister = () => {
    history.push({
      pathname: '/register',
    });
  };

  //Email, PW Login
  const onLogin = () => {
    loginInfo &&
      authService
        .onAccountLogin(loginInfo.email, loginInfo.password)
        .then((result) => {
          goEmotion(result.user.uid);
        })
        .catch((error) => {
          alert(error.message);
          // emailRef.current.value = '';
        });
  };

  //Get Input Ref
  const onGetRef = (getMail, getPw) => {
    setLoginInfo({
      email: getMail,
      password: getPw,
    });
  };

  return (
    <div className={style.login}>
      <section className={style.box}>
        <h2>Your Emotion 😉</h2>
        <RegisterInput
          authService={authService}
          onGetRef={onGetRef}
          styleName={'loginInput'}
        ></RegisterInput>
        <button type='button' onClick={onLinkRegister} className={style.regbtn}>
          Join
        </button>
        <button type='button' onClick={onLogin} className={style.loginbtn}>
          Login
        </button>
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
