/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const photos = {
  p1: 'https://firebasestorage.googleapis.com/v0/b/craft-lab-khv.appspot.com/o/products%2Fadygeiski-1.png?alt=media&token=f7e4255e-898c-4d1c-8967-341c16e70620',
  p2: 'https://firebasestorage.googleapis.com/v0/b/craft-lab-khv.appspot.com/o/products%2Fadygeiski.JPG?alt=media&token=cc0ab393-d301-40cf-9bc6-fb61ba3e7f0e',
  p3: 'https://firebasestorage.googleapis.com/v0/b/craft-lab-khv.appspot.com/o/products%2Fknolle.JPG?alt=media&token=bb1fa801-e52e-48cd-a8ee-bfc75c4e48ca',
};

const ProductCard = () => (
  <Card sx={{ maxWidth: 300 }}>
    <CardMedia component="img" image={photos.p3} alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Адыгейский
      </Typography>
      <Typography color="text.secondary" variant="p">
        Мягкий молодой сыр белого цвета, часто с кремовым оттенком. У него
        кисломолочный, чуть солоноватый вкус и нежная, мягкая консистенция
      </Typography>
    </CardContent>
    <CardActions></CardActions>
  </Card>
);

export default ProductCard;

// TODO продолжить работу над карточкой
