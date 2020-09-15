
import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
      <header className={styles.header}>
        <img src='http://pngimg.com/uploads/scar/scar_PNG15775.png' />
        <div className={styles.loginData}>
            {props.isAuth ?
                <div> { props.login} - <button onClick={props.logout}> Log out </button> </div>
                : <NavLink to='/login'> Sign In </NavLink> }
        </div>



      </header>
  );
}

export default Header;
