import React from 'react'
import styles from './Content.module.scss'

export default function Content(props) {
    return (
        <div className={`${styles.content} ${props.fullscreen ? styles.fullscreen : ''}`}>
            {props.children}
        </div>
    )
}
