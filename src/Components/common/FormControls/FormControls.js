import React from "react";
import styles from './FormConstrols.module.css';
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : null) }>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span> }
        </div>

    )
}


export const Elem = (Elem) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : null) }>
            <div>
                <Elem {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span> }
        </div>

    )
}