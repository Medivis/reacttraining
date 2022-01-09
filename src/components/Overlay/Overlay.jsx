import React from 'react'
import ReactDom from 'react-dom'
import Icon from '../Icon/Icon'
import styles from './Overlay.module.scss'

export default function Overlay(props) {
  if (!props.show) return null
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.loading}>
          <Icon size="32px" name="fas fa-spinner fa-pulse" />
      </div>
    </>,
    document.getElementById('portal')
  )
}
