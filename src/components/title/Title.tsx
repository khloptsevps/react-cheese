import React from 'react';

import styles from './Title.module.scss';

const Title: React.FC = () => (
  <div className={styles.root}>
    <h1 className={styles.text}>Наша продукция</h1>
  </div>
);

export default Title;
