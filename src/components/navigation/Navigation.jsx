import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.root}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/" className={styles.link}>
          ГЛАВНАЯ
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/delivery" className={styles.link}>
          ДОСТАВКА И ОПЛАТА
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="/about" className={styles.link}>
          O HAC
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
