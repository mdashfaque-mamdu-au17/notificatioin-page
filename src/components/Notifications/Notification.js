import classNames from 'classnames';
import React from 'react';
import styles from './Notification.module.css';
const Notification = ({ notification }) => {
  return (
    <>
      <div
        className={classNames(
          styles.notification,
          !notification?.readStatus && styles.unread
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
              {!notification?.readStatus && (
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
