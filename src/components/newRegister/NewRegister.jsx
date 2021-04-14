import React, { useState } from 'react';
import { useHistory } from 'react-router';
import RegisterInput from '../registerInput/RegisterInput';
import style from './newRegister.module.css';

const NewRegister = ({ authService }) => {
  const [newInfo, setNewInfo] = useState();
  const history = useHistory();

  const goEmotion = (userId) => {
    history.push({
      pathname: '/emotion',
      state: { id: userId },
    });
  };

  const onRegister = () => {
    newInfo &&
      authService
        .onAccountRegist(newInfo.email, newInfo.password)
        .then((result) => {
          goEmotion(result.user.uid);
        })
        .catch((error) => {
          alert(error.message);
          // pwRef.current.value = '';
        });
  };

  //Get Input Ref
  const onGetRef = (getMail, getPw) => {
    setNewInfo({
      email: getMail,
      password: getPw,
    });
  };

  return (
    <section className={style.newReg}>
      <div className={style.tit}>
        <h1 className={style.sysTitle}>Your Emotion</h1>
        <span>😉</span>
      </div>
      <RegisterInput
        authService={authService}
        onGetRef={onGetRef}
        styleName={'newInput'}
      />
      <button type='button' className={style.regBtn} onClick={onRegister}>
        Join
      </button>
    </section>
  );
};

export default NewRegister;
