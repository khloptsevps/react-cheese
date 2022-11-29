/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../../assets/img/logo.png';

import Navigation from '../navigation/Navigation';
import Information from '../information/Information';
import SearchInput from '../searchInput/SearchInput';
import Cart from '../cart/Cart';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.root}>
    <div className="header__content">
      <div className={styles.top}>
        <a href="#" className="header__link">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <Information />
      </div>
      <Navigation />
      <div className={styles.bottom}>
        <SearchInput />
        <div className={styles.line}></div>
        <Cart />
      </div>
    </div>
  </header>
);

export default Header;
