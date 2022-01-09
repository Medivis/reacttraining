import React from 'react'
import styles from './IconText.module.scss'

function IconText(props) {
    return (
        <>
            <div className={ styles.container }>
                <div className={styles.icon}>{props.icon}</div>
                <div className={styles.text}>{props.children}</div>
            </div>
        </>
    )
}

export default IconText

