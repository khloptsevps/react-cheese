import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

import styles from './Skeleton.module.scss';

const Skeletons: React.FC = () => (
  <Card sx={{ width: 300, height: 380 }} className={styles.root}>
    <Skeleton variant="rectangular" width={300} height={200} animation="wave" />
    <div>
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '8.5rem' }} animation="wave" />
      </CardContent>
      <CardActions
        sx={{ padding: '8px 16px', justifyContent: 'space-between' }}
      >
        <Skeleton variant="rounded" width="35%" height={35} animation="wave" />
        <Skeleton variant="rounded" width={75} height={35} animation="wave" />
      </CardActions>
    </div>
  </Card>
);

export default Skeletons;
