import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './Notification.module.css';
const Notification = ({ notification, notificationCount }) => {
  const [readStatus, setReadStatus] = useState(notification.readStatus);
  useEffect(() => {
    if (notificationCount < 1) {
      setReadStatus(true);
    }
  }, [notificationCount]);

  return (
    <>
      <div
        className={classNames(
          styles.notification,
          !readStatus && styles.unread,
          notification.reactionType === 'message' &&
            styles.notification__message
        )}
      >
        <div>
          <img
            src={notification?.personImage}
            alt=""
            className={styles.person__image}
          />
        </div>
        <div>
          <div
            className={classNames(
              notification.reactionType === 'commented' &&
                styles.comment__section
            )}
          >
            <p>
              <a className={classNames(styles.person__text)} href="#">
                {notification?.personName}
              </a>{' '}
              <span className={classNames(styles.reaction__text)}>
                {notification?.reactionMessage}
              </span>{' '}
              {notification?.reactionType === 'post' && (
                <a
                  className={classNames(
                    styles.reaction__text,
                    styles.reaction__post
                  )}
                  href="#"
                >
                  {notification?.post}
                </a>
              )}
              {notification?.reactionType === 'group' && (
                <a
                  className={classNames(
                    styles.reaction__text,
                    styles.reaction__group
                  )}
                  href="#"
                >
                  {notification?.group}
                </a>
              )}
              {!readStatus && (
                <span className={classNames(styles.unread__mark)}></span>
              )}
            </p>
            {notification?.reactionType === 'commented' && (
              <div>
                <img
                  src={notification?.commentImage}
                  alt="comment"
                  className={classNames(styles.person__image)}
                />
              </div>
            )}
            {notification.reactionType !== 'commented' && (
              <span className={classNames(styles.timestamp)}>
                {notification?.timeAgo} ago
              </span>
            )}
            {notification.reactionType === 'commented' && (
              <span
                className={classNames(
                  styles.timestamp,
                  styles.comment__timestamp
                )}
              >
                {notification?.timeAgo} ago
              </span>
            )}
          </div>
        </div>
      </div>
      {notification?.reactionType === 'message' && (
        <div className={styles.message__box}>
          <p>{notification?.message}</p>
        </div>
      )}
    </>
  );
};

export default Notification;
