/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import styles from './Sort.module.scss';

const Sort = () => {
  const sortMethod = [
    { id: 1, name: 'Цене' },
    { id: 2, name: 'Алфавиту' },
  ];
  const [activeSort, setActiveSort] = useState(1);

  return (
    <div className={styles.root}>
      <div className={styles.label}>
        <ArrowDropDownIcon />
        <span className={styles.title}>Сортировка по:</span>
        <span
          className={styles.condition}
          onClick={() => {}}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          цене
        </span>
      </div>
    </div>
  );
};

export default Sort;
