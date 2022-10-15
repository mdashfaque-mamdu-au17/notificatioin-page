import React from 'react';
import styles from './NotificationsList.module.css';
import { notificationData } from '../../data/data';
import Notification from './Notification';
import classNames from 'classnames';
const NotificationsList = () => {
  return (
    <div className={classNames(styles.notification__list)}>
      {notificationData?.map((notification) => {
        return (
          <Notification key={notification.id} notification={notification} />
        );
      })}
    </div>
  );
};

export default NotificationsList;
