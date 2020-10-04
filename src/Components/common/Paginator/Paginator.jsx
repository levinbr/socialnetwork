import React, {useState} from 'react';
import styles from './Paginator.module.css'
import cn from 'classnames'

const Paginator = ({totalItems, pageSize, currentPage, onChangePage, portionSize = 15}) => {
    let pagesCount = Math.ceil( totalItems / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil( pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={cn(styles.paginator)}>
        { portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}> PREV </button> }
            { pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={ currentPage === p ? styles.activePage : null }
                                 key={p}
                                 onClick={ (e) => {
                                     onChangePage(p);
                                 }}>{p}</span>

                    })
            }
        { portionCount > portionNumber  &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}> NEXT </button>
        }

    </div>
}

export default Paginator;