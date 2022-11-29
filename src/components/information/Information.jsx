import React from 'react';
import whatsAppIcon from '../../assets/svg/whatsApp-icon.svg';
import telegramIcon from '../../assets/svg/telegram-icon.svg';

import styles from './Information.module.scss';

const Information = () => (
  <div className={styles.info}>
    <div className={styles.contacts}>
      <div className={styles.phone}>
        <a href="tel:+79999999999">+7 (999) 666-66-66</a>
      </div>
      <div className={styles.email}>
        <a href="mailto:test@test.com">test@testhell.ru</a>
      </div>
      <div className={styles.icons}>
        <div className={styles.whatsapp}>
          <a
            href="https://wa.me/79200000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsAppIcon}
              alt="icon whatsApp"
              className={styles.icon}
            />
          </a>
        </div>
        <div className="telegram">
          <a
            href="https://t.me/khloptsevps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={telegramIcon}
              alt="icon whatsApp"
              className={styles.icon}
            />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.address}>
      <p className={styles.title}>Хабаровск, Какая-то улица, д.99 оф. 666</p>
      <p className={styles.info}>
        Время работы: Пн-Вс с 00:00 до 00:00
        <br />
        Принимаем заказы круглосуточно,
        <br />
        доставляем в рабочее время
      </p>
    </div>
  </div>
);

export default Information;
