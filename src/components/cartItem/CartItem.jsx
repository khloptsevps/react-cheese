import React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import styles from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const { name, imageLink, price, count } = item;
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
        <IconButton aria-label="add to cart" color="orange">
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: '3.2rem' }} />
        </IconButton>
        <b>{count}</b>
        <IconButton aria-label="remove one from cart" color="orange">
          <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: '3.2rem' }} />
        </IconButton>
      </div>
      <div className={styles.price}>
        <b>{price} ₽</b>
      </div>
      <div className="remove">
        <IconButton aria-label="remove all from cart" color="gray">
          <CancelOutlinedIcon sx={{ fontSize: '3.2rem' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
