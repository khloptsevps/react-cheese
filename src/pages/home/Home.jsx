import React from 'react';

import Title from '../../components/title/Title';
import Sort from '../../components/sort/Sort';
import Filter from '../../components/filter/Filter';

import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.content}>
    <Title />
    <Sort />
    <div className="products">
      <Filter />
      <div className="cheeses"></div>
    </div>
  </div>
);

export default HomePage;
