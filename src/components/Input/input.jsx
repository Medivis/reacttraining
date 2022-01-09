import React from 'react'
import styles from './Input.module.scss'

export default function input(props) {
  return (
    <input className={styles.input} {...props}>
      {props.children}
    </input>
  )
}
