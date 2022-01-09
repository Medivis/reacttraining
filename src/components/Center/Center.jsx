import React from 'react'
import styles from './Center.module.scss'

export default function Center(props) {
    return (
        <div style={{ height: props.height, width: props.width }} className={styles.center}>
            <div className={styles.center_object}>
                {props.children}
            </div>
        </div>
    )
}
