import React from 'react'
import styles from './Container.module.scss'

export default function Container(props) {
    return (
        <>
            <div className={
                `${props.margin === "true" || props.margin === "sides" ? styles.container_padding_sides : ""}
            ${props.margin === "true" || props.margin === "topbottom" ? styles.container_padding_top : ""}`
            }>
                <div className={
                    props.size === "large" ? styles.container_large : styles.container_small}
                    {...props}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
