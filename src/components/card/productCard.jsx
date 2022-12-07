import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import styles from './ProductCard.module.scss';

const photos = {
  p1: 'https://firebasestorage.googleapis.com/v0/b/craft-lab-khv.appspot.com/o/products%2Fadygeiski-1.png?alt=media&token=f7e4255e-898c-4d1c-8967-341c16e70620',
  p2: 'https://firebasestorage.googleapis.com/v0/b/craft-lab-khv.appspot.com/o/products%2Fadygeiski.JPG?alt=media&token=cc0ab393-d301-40cf-9bc6-fb61ba3e7f0e',
  p3: 'https://firebasestorage.googleapis.com/v0/b/craft-lab-khv.appspot.com/o/products%2Fknolle.JPG?alt=media&token=bb1fa801-e52e-48cd-a8ee-bfc75c4e48ca',
};

const ProductCard = () => {
  const [count, setCount] = React.useState(0);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '1px',
      color: '#000',
    },
  }));

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia component="img" image={photos.p3} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Адыгейский
        </Typography>
        <Typography color="text.secondary" variant="p">
          Мягкий молодой сыр белого цвета, часто с кремовым оттенком. У него
          кисломолочный, чуть солоноватый вкус и нежная, мягкая консистенция
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <div className={styles.text}>
          <span className={styles.top}>от 300 руб.</span>
          <span className={styles.bottom}>за 100 гр</span>
        </div>
        <Button
          sx={{
            borderRadius: '1rem',
            color: '#ea8e2a',
          }}
          color="yellow"
          variant="outlined"
          onClick={handleAdd}
        >
          <Typography sx={{ marginRight: '1rem' }} variant="button">
            Добавить
          </Typography>
          <StyledBadge badgeContent={count} color="yellow">
            <ShoppingCartIcon />
          </StyledBadge>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

// TODO продолжить работу над карточкой
