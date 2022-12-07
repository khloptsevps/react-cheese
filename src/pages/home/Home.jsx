import React from 'react';

import Title from '../../components/title/Title';
import Sort from '../../components/sort/Sort';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/card/productCard';

import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.content}>
    <Title />
    <Sort />
    <div className={styles.products}>
      <Filter />
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
);

export default HomePage;
