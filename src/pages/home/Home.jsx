import React from 'react';
import { useSelector } from 'react-redux';

import { selectProducts } from '../../redux/slices/productSlice';

import Title from '../../components/title/Title';
import Sort from '../../components/sort/Sort';
import ProductCard from '../../components/card/ProductCard';
import Skeleton from '../../components/skeletons/Skeleton';

import styles from './Home.module.scss';

// import Filter from '../../components/filter/Filter';

const HomePage = () => {
  const { items, process } = useSelector(selectProducts);
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* <Filter /> */}
          <Sort />
        </div>
        <div className={styles.title}>
          <Title />
          <div className={styles.cards}>
            {process === 'success'
              ? items.map((item) => <ProductCard key={item.id} {...item} />)
              : Array(6)
                  .fill()
                  .map((_item, i) => <Skeleton key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO временно отключен фильтр

export default HomePage;
