import React from 'react'
import styles from './PopupOption.module.scss'

export default function PopupOption(props) {
  return (
    <p className={styles.popupOption} {...props}>
      {props.children}
    </p>
  )
}
