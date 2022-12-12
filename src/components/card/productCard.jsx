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

const ProductCard = ({ name, imageLink, price, oneByOne }) => {
  const [count, setCount] = React.useState(0);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -1,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '6px',
    },
  }));

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <Card sx={{ width: 300, height: 380 }} className={styles.card}>
      <CardMedia
        component="img"
        image={imageLink}
        alt={name}
        // sx={{ padding: '0.8rem', borderRadius: '1.2rem' }}
        sx={{ height: 200 }}
      />
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {/* <Typography color="text.secondary" variant="p">
          {description}
        </Typography> */}
        </CardContent>
        <CardActions
          sx={{ padding: '8px 16px', justifyContent: 'space-between' }}
        >
          <div className={styles.text}>
            <span className={styles.top}>
              от {oneByOne ? price : price / 10} ₽
            </span>
            <span className={styles.bottom}>
              за {oneByOne ? 'штуку' : '100 гр'}
            </span>
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
            <StyledBadge badgeContent={count} color="warning">
              <ShoppingCartIcon />
            </StyledBadge>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;
