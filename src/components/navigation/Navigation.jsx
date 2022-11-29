import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.root}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="/about" className={styles.link}>
          O HAC
        </a>
      </li>
      <li className={styles.item}>
        <a href="/delivery" className={styles.link}>
          ДОСТАВКА И ОПЛАТА
        </a>
      </li>
      <li className={styles.item}>
        <a href="/contacts" className={styles.link}>
          КОНТАКТЫ
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
