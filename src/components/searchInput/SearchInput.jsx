import React, { useState } from 'react';

import styles from './SearchInput.module.scss';
import searchIcon from '../../assets/svg/search-icon.svg';
import resetSearchIcon from '../../assets/svg/search-icon-reset.svg';

const SearchInput = () => {
  const [value, setValue] = useState();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.root} role="searchbox">
      <img src={searchIcon} alt="search_icon" className={styles.searchIcon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск продуктов..."
        onChange={handleInput}
        value={value}
      />
      {value && (
        <img
          aria-hidden="true"
          onClick={() => setValue('')}
          src={resetSearchIcon}
          alt="search_close"
          className={styles.resetIcon}
        />
      )}
    </div>
  );
};

export default SearchInput;
