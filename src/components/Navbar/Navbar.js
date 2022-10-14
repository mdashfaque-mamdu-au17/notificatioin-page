import classNames from 'classnames';
import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={classNames(styles.navbar)}>
      <div
        className={classNames(styles.navbar__notification__container)}
      >
        <h5>Notifications</h5>
        <div className={classNames(styles.navbar__badge)}>
          <span>3</span>
        </div>
      </div>
      <div>
        <button className={classNames(styles.clear__btn)}>
          Mark all as read
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
