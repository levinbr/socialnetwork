import React, {useState} from 'react';
import s from './Paginator.module.css'
import cn from 'classnames'
import Preloader from "../Preloader/Preloader";

const Paginator = ({totalItems, pageSize, currentPage, onChangePage, portionSize = 7}) => {
    let pagesCount = Math.ceil( totalItems / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil( pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    const prev = '<<'

    if (!totalItems) return <Preloader />

    return <div className={cn(s['pagination'], s['unselectable'])}>
        <span className={s['prev']} onClick={() => {
            portionNumber !== 1 && setPortionNumber(portionNumber - 1)}}> {prev}
        </span>

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={ cn(s['num'], { [s['active-page']] : currentPage === p} )}
                             key={p}
                             onClick={(e) => {
                                 onChangePage(p);
                             }}> {p}
                </span>
            })

        }
        <span className={s['next']} onClick={() => {
            portionNumber !== portionCount && setPortionNumber(portionNumber + 1)}}> >>
        </span>
    </div>
}


export default Paginator;