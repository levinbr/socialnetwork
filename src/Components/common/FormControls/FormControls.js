import React from "react";
import s from './FormConstrols.module.css';
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : null) }>
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
        <div className={s['control'] + " " + (hasError ? s['error'] : null) }>
            <Elem {...input} {...props} />
            { hasError && <span> {meta.error} </span> }
        </div>

    )
}