/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import styles from './Sort.module.scss';

const Sort = () => {
  const sortMethods = [
    { id: 1, name: 'цене' },
    { id: 2, name: 'алфавиту' },
  ];
  const [activeSort, setActiveSort] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const sortMethod = sortMethods.find(({ id }) => id === activeSort);

  const sortRef = React.useRef(null);

  const handleClickOutside = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className={styles.root} ref={sortRef}>
      <div className={styles.label}>
        <ArrowDropDownIcon />
        <span className={styles.title}>Сортировка по:</span>
        <span
          className={styles.condition}
          onClick={() => setIsOpen(!isOpen)}
          aria-hidden="true"
        >
          {sortMethod.name}
        </span>
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <ul>
            {sortMethods.map(({ id, name }) => {
              const isActive = id === activeSort ? styles.active : '';
              return (
                <li
                  className={isActive}
                  key={id}
                  onClick={() => {
                    setActiveSort(id);
                    setIsOpen(!isOpen);
                  }}
                  aria-hidden="true"
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
