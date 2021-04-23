import React from 'react';
import style from './header.module.css';

const Header = ({ onLogout, userName }) => {
  return (
    <header className={style.header}>
      <h2>
        {userName},
        <br /> How Was Your Today? 🙂
      </h2>
      <button className={style.logout} onClick={onLogout}>
        LOGOUT
      </button>
    </header>
  );
};

export default Header;
