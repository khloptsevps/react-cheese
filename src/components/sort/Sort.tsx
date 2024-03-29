import React from 'react';
import { useDispatch } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { setSort } from '../../redux/slices/filterSlice';

import styles from './Sort.module.scss';

type SortMethodsItem = {
  id: number;
  name: string;
  sortBy: string;
  order: string;
};

type SortProps = {
  sort: {
    id: number;
  };
};

const sortMethods: SortMethodsItem[] = [
  { id: 1, name: 'цене (возрастанию)', sortBy: 'price', order: 'asc' },
  { id: 2, name: 'цене (убыванию)', sortBy: 'price', order: 'desc' },
  { id: 3, name: 'алфавиту (с начала)', sortBy: 'name', order: 'asc' },
  { id: 4, name: 'алфавиту (с конца)', sortBy: 'name', order: 'desc' },
];

const Sort: React.FC<SortProps> = ({ sort }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const sortMethod = sortMethods.find(({ id }) => id === sort.id);

  if (!sortMethod) {
    throw new Error('Check sort method');
  }

  const sortRef = React.useRef(null);

  const handleClickOutside = (e: any) => {
    // TODO: fix any
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

  const handleClickSortList = () => setIsOpen(!isOpen);

  const handleClickSort = (id: number) => () => {
    const newSortMethod = sortMethods.find((method) => method.id === id);
    // TODO add lodash;
    dispatch(setSort(newSortMethod));
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.root} ref={sortRef}>
      <div className={styles.label}>
        <ArrowDropDownIcon />
        <span className={styles.title}>Сортировка по:</span>
        <span
          className={styles.condition}
          onClick={handleClickSortList}
          aria-hidden="true"
        >
          {sortMethod.name}
        </span>
      </div>
      {isOpen && (
        <div className={styles.popup}>
          <ul>
            {sortMethods.map(({ id, name }) => {
              const isActive: string = id === sort.id ? styles.active : '';
              return (
                <li
                  className={isActive}
                  key={id}
                  onClick={handleClickSort(id)}
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
