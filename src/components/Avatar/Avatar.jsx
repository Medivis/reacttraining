import { normalizeReference } from 'markdown-it/lib/common/utils'
import React from 'react'
import styles from './Avatar.module.scss'

export default function Avatar(props) {

  const style = props.size === "large" ? styles.large : "";

  return (
    <div className={`${styles.box} ${style}`} style={{ backgroundColor: props.color }}>
      <p className={styles.text}>{ props.children }</p>
    </div>
  )
}
