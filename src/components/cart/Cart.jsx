import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import styles from './Cart.module.scss';

const Cart = () => (
  <div>
    <Link to="/cart" className={styles.link}>
      <span>1 500 ₽</span>
      <div className={styles.delimiter}></div>
      <ShoppingBasketOutlinedIcon fontSize="small" className="mr-10" />
      <span>3</span>
    </Link>
  </div>
);

export default Cart;
