import React from 'react'
import styles from './Image.module.scss'

export default function Image(props) {

    const imageStyle = {
        backgroundImage: `url(${props.src})`,
        minHeight: props.height,
        minWidth: props.width,
    }

    return (
        <div className={styles.image} style={imageStyle}>
            {props.children} 
        </div>
    )
}
