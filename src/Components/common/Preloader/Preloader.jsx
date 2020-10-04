import React from 'react';
import preloader from '../../../img/preloader.gif';
import s from './Preloader.module.css'
const Preloader = (props) => {
    return (
        <div className={s['wrap']}>
            <div className={s['loading']}>
                <div className={s['bounceball']}></div>
                <div className={s['text']}> LOADING </div>
            </div>
        </div>
    )
}

export default Preloader;