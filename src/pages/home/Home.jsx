import React from 'react';

import Title from '../../components/title/Title';
import Sort from '../../components/sort/Sort';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/card/ProductCard';

import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.content}>
    <div className={styles.container}>
      <div className={styles.top}>
        <Filter />
        <Sort />
      </div>
      <div className={styles.title}>
        <Title />
        <div className={styles.cards}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
