import classNames from 'classnames';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import NotificationsList from '../Notifications/NotificationsList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={classNames(styles.home)}>
      <Navbar />
      <NotificationsList />
    </main>
  );
};

export default Home;
