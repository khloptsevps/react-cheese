import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import { useSelector } from 'react-redux';

import styles from './Cart.module.scss';

import { selectCart } from '../../redux/slices/cartSlice.js';

const Cart = () => {
  const { totalPrice, items } = useSelector(selectCart);
  return (
    <div>
      <Link to="/cart" className={styles.link}>
        <span>{totalPrice.toLocaleString('ru')} ₽</span>
        <div className={styles.delimiter}></div>
        <ShoppingBasketOutlinedIcon fontSize="small" className="mr-10" />
        <span>{items.length}</span>
      </Link>
    </div>
  );
};

export default Cart;
