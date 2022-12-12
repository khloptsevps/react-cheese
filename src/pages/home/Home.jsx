import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectProducts, fetchProducts } from '../../redux/slices/productSlice';
import { selectFilter } from '../../redux/slices/filterSlice';

import Title from '../../components/title/Title';
import Sort from '../../components/sort/Sort';
import Skeleton from '../../components/skeletons/Skeleton';
import ProductCard from '../../components/cards/ProductCard';

import styles from './Home.module.scss';

// import Filter from '../../components/filter/Filter';

const HomePage = () => {
  const { items, process } = useSelector(selectProducts);
  const { sort } = useSelector(selectFilter);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const { sortBy, order } = sort;
    dispatch(fetchProducts({ sortBy, order }));
    window.scrollTo(0, 0);
  }, [dispatch, sort]);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* <Filter /> */}
          <Sort sort={sort} />
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
