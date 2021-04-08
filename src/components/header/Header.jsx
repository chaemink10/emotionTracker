import React from 'react';
import style from './header.module.css';

const Header = ({ trackerTotalCount, onLogout, userName }) => {
  return (
    <header className={style.header}>
      <h2>
        {userName},
        <br /> How Was Your Today? 🙂
      </h2>
      <div className={style.counter}>{trackerTotalCount}</div>
      <button className={style.logout} onClick={onLogout}>
        LOGOUT
      </button>
    </header>
  );
};

export default Header;
