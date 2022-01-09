import React from 'react'
import styles from './FlexContainer.module.scss'

export default function FlexContainer(props) {
    return (
        <div className={`${styles.flex_container} ${props.gap ? styles.gap : ""}`} style={{ gap: props.gap || 0 }}>
            {props.children}
        </div>
    )
}
