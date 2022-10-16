import classNames from 'classnames';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NotificationsList from '../Notifications/NotificationsList';
import styles from './Home.module.css';

const Home = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const markAllReadClickHandler = () => {
    setNotificationCount(0);
  };
  return (
    <main className={classNames(styles.home)}>
      <Navbar
        notificationCount={notificationCount}
        onReadAll={markAllReadClickHandler}
      />
      <NotificationsList notificationCount={notificationCount} />
    </main>
  );
};

export default Home;
