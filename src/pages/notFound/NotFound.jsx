import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  const error = useRouteError();
  console.warn(error);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Страница не найдена 🙁</h1>
      <p className={styles.text}>Страницы не существует, пока что...</p>
      <p className={styles.text}>
        <i className={styles.text}>
          Возвращайтесь пока на{' '}
          <Link to="/" className={styles.text}>
            главную
          </Link>
        </i>
      </p>
    </div>
  );
};

export default NotFound;
