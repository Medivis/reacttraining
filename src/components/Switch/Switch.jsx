import React, { useState } from 'react'
import styles from './Switch.module.scss'

export default function Switch(props) {
  const [on, setOn] = useState(false)

  const state = props.value ?? on;

  function handleOnChange() {
    if (typeof props.onChange === 'function') props.onChange(!state)
    setOn(!state)
  }
  
  return (
    <button onClick={handleOnChange} className={styles.btn}>
      {state && props.on}
      {!state && props.off}
    </button>
  )
}
