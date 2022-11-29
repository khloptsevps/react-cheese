import React from 'react';

import cartIcon from '../../assets/svg/cart-icon.svg';

import styles from './Cart.module.scss';

const Cart = () => (
  <div className={styles.root}>
    <div className={styles.items}>
      <div className={styles.box}>
        <a href="/" className={styles.link}>
          <div className={styles.iconBox}>
            <img src={cartIcon} alt="icon_cart" className={styles.icon} />
            <span className={styles.count}>5</span>
          </div>
          <span className={styles.price}>1 500 руб.</span>
        </a>
      </div>
    </div>
  </div>
);

export default Cart;
