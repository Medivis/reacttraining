import React from 'react'
import styles from './VideoBackground.module.scss'

export default function VideoBackground(props) {
    return (
        <div className={styles.container}>
            <div className={styles.video_wrapper}>
                <div className={ styles.video_overlay}/>
                <video width={props.width} height={props.height} autoPlay={true} loop={true} muted>
                    {props.source}
                </video>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}
