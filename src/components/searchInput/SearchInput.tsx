import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './SearchInput.module.scss';
import searchIcon from '../../assets/svg/search-icon.svg';
import resetSearchIcon from '../../assets/svg/search-icon-reset.svg';

import { setSearch } from '../../redux/slices/filterSlice';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(setSearch(e.target.value));
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
