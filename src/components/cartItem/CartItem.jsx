/* eslint-disable no-unused-vars */
import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { grey } from '@mui/material/colors';

import { useDispatch } from 'react-redux';

import {
  addItem,
  removeItemOne,
  removeItem,
} from '../../redux/slices/cartSlice.js';

import styles from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageLink, price, count } = item;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItemOne = () => {
    if (item.count > 1) {
      dispatch(removeItemOne(item));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={imageLink} alt="cheese" />
      </div>
      <div className={styles.info}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </div>
      <div className={styles.count}>
        <IconButton
          aria-label="remove one item from cart"
          color="secondary"
          onClick={handleRemoveItemOne}
        >
          <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: '3.2rem' }} />
        </IconButton>
        <b>{count}</b>
        <IconButton
          aria-label="add to cart"
          color="secondary"
          onClick={handleAddItem}
        >
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: '3.2rem' }} />
        </IconButton>
      </div>
      <div className={styles.price}>
        <b>{price} ₽</b>
      </div>
      <div className={styles.remove}>
        <IconButton
          aria-label="remove item from cart"
          color={grey[500]}
          onClick={handleRemoveItem}
        >
          <CancelOutlinedIcon sx={{ fontSize: '3.2rem' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
