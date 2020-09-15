import React from 'react';
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className={`${styles.nav} ${styles.item}`}>
          <div>
              <NavLink to='/profile' activeClassName={styles.activeLink}> Profile </NavLink>
          </div>
          <div>
              <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
          </div>
          <div>
              <NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink>
          </div>
          <div>
              <a>News</a>
          </div>
          <div>
              <a>Music</a>
          </div>
          <div>
              <a>Settings</a>
          </div>
      </nav>
  );
}

export default Navbar;
