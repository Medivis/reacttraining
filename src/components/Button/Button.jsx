import React from 'react'
import styles from './Button.module.scss'

export default function Button(props) {

  const types = {
    outline: styles.outline,
    transparent: styles.transparent
  }

  const size = {
    small: styles.small
  }
  
  const style = `${styles.button} ${types[props.type] ?? ""} ${size[props.size] ?? ""}`

  return (
    <button className={style} {...props}>
      {props.children}
    </button>
  )
}
