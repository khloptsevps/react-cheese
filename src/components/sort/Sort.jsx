import React, { useState } from 'react';

import styles from './Sort.module.scss';

const Sort = () => {
  const sortMethod = [
    { id: 1, name: 'Цене' },
    { id: 2, name: 'Алфавиту' },
  ];
  const [activeSort, setActiveSort] = useState(1);

  return (
    <div className={styles.root}>
      <div className={styles.title}>Сортировать по:</div>
      <ul className={styles.list}>
        {sortMethod.map(({ id, name }) => {
          const active = id === activeSort ? styles.active : '';
          return (
            <li
              className={styles.item}
              key={id}
              aria-hidden="true"
              onClick={() => setActiveSort(id)}
            >
              <span className={active}>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
