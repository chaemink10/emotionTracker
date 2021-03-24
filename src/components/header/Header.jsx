import React from 'react';
import style from './header.module.css';

const Header = ({ trackerTotalCount }) => (
  <header className={style.header}>
    <h2>
      Chaemin,
      <br /> How Was Your Today? 🙂
    </h2>
    <div className={style.counter}>{trackerTotalCount}</div>
  </header>
);

export default Header;
