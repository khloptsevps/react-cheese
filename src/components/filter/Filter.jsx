/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import styles from './Filter.module.scss';

const Filter = () => {
  const [active, setActive] = useState(0);
  const categories = [
    { id: 1, name: 'Сыры молодые' },
    { id: 2, name: 'Сыры твердые' },
    { id: 3, name: 'Сыры п.твердые' },
    { id: 4, name: 'Молочная продукция' },
  ];
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Продукция</h2>
      <ul className="mb-50">
        {categories.map(({ id, name }) => {
          const activeCategory = id === active ? styles.active : '';
          return (
            <li key={id} className={styles.item}>
              <span
                onClick={() => setActive(id)}
                className={`${styles.text} ${activeCategory}`}
                aria-hidden="true"
              >
                {name}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="filter__bottom">
        <button onClick={() => setActive(0)} className={styles.btn}>
          Очистить фильтр
        </button>
      </div>
    </div>
  );
};

export default Filter;
