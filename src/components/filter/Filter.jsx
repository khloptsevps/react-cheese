/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';

import styles from './Filter.module.scss';

const Filter = () => {
  const [active, setActive] = useState(0);
  const categories = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Сыры молодые' },
    { id: 2, name: 'Сыры твердые' },
    { id: 3, name: 'Сыры п.твердые' },
    { id: 4, name: 'Молочная продукция' },
  ];

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {categories.map(({ id, name }) => {
          const variant = id === active ? 'primary' : 'outlined';
          return (
            <li key={id} className={styles.item}>
              <Chip
                label={name}
                variant={variant}
                color="primary"
                onClick={() => setActive(id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
