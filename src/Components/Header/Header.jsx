
import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../img/logo.png'

const Header = (props) => {
  return (
      <header className={s.header}>
        <img src={logo} />
        <div className={s.loginData}>
            {props.isAuth
                ? <div> { props.login} - <button onClick={props.logout}> Log out </button> </div>
                : <NavLink to='/login'> Sign In </NavLink> }
        </div>
      </header>
  );
}

export default Header;
