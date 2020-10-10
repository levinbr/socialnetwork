import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import cn from 'classnames'

const Navbar = () => {
  return (
      <nav className={cn(s['nav'], s['item'])}>
          <NavLink to='/profile' activeClassName={s.activeLink}>
              <div> Profile </div>
          </NavLink>
          <NavLink to='/dialogs' activeClassName={s.activeLink}>
              <div> Messages </div>
          </NavLink>
          <NavLink to='/users' activeClassName={s.activeLink}>
              <div> Users </div>
          </NavLink>
          <NavLink to='/development' activeClassName={s.activeLink}>
              <div> News </div>
          </NavLink>
          <NavLink to='/development' activeClassName={s.activeLink}>
              <div> Music </div>
          </NavLink>
          <NavLink to='/development' activeClassName={s.activeLink}>
              <div> Settings </div>
          </NavLink>
      </nav>
  );
}

export default Navbar;
