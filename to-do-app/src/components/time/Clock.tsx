import React, { useState, useEffect } from 'react';
import styles from './clock.module.scss'

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(getCurrentTime());
  const [date, setDate] = useState<string>(getCurrentDate());

  useEffect(() => {
    // Обновляем время и дату каждую минуту
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 10000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime(): string {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function getCurrentDate(): string {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };

    const formattedDate = new Intl.DateTimeFormat('en-EN', options).format(date);
    return formattedDate;
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className={styles.clockBlock}>
      <p className={styles.clock}>{time}</p>
      <p className={styles.clock}>{capitalizeFirstLetter(date)}</p>
    </div>
  );
};

export default Clock;
