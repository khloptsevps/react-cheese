import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

import CartItem from '../../components/cartItem/CartItem';

import emptyCart from '../../assets/img/empty-cart.png';
import styles from './CartPage.module.scss';

const CartPage = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const itemsCount = items.reduce((acc, { count }) => count + acc, 0);
  if (!items.length) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <Typography gutterBottom variant="h4" component="h4">
            Корзина пустая 😕
          </Typography>
          <Typography gutterBottom paragraph>
            Вероятней всего, вы ничего не добавили в корзину! Для того, чтобы
            заказать наш вкусный сыр, перейди на главную страницу.
          </Typography>
          <img src={emptyCart} alt="empty cart" />
          <Link to="/" className={`${styles.link} ${styles.back}`}>
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.title}>
            <ShoppingBasketOutlinedIcon className="mr-10" />
            <h2>Корзина</h2>
          </div>
          <button className={styles.clear}>
            <DeleteForeverIcon fontSize="small" className="mr-10" />
            <span>Очистить корзину</span>
          </button>
        </div>
        <div className={styles.items}>
          {items.map(({ id, ...item }) => (
            <CartItem key={id} item={item} />
          ))}
        </div>
        <div className="cart-bottom">
          <div className={styles.details}>
            <span>
              Всего сыров: <b>{itemsCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{`${totalPrice}`} ₽</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <Link to="/" className={`${styles.link} ${styles.back}`}>
              <ArrowBackIosNewIcon fontSize="small" />
              Вернуться назад
            </Link>
            <Link to="/" className={styles.link}>
              Оформить заказ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
