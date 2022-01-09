import React from 'react'
import styles from './Dialog.module.scss'
import ReactDom from 'react-dom'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'


export default function Dialog(props) {

  function handleClick(value) {
    if (typeof props.onClick === 'function') props.onClick(value)
  }

  if (!props.show) return null
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}/>
      <div className={styles.dialog}>

        {props.titlebar && <div className={styles.titlebar}>
          <Button onClick={() => handleClick(false)} type="transparent">
            <Icon name="fas fa-times" frame="20px" />
          </Button>
        </div>}

        {props.title && <h1 className={styles.title}>
          {props.title}
        </h1>}

        {props.error && props.error !== "" && <div className={styles.error}>
          {props.error}
        </div>}

        <div className={styles.content}>
          {props.children}
        </div>

        <div className={styles.buttons}>
          {props.cancel && <Button onClick={()=> handleClick(false)} size="small" type="outline">Cancel</Button>}
          <Button onClick={() => handleClick(true)} size="small">OK</Button>
        </div>

      </div>
    </>,
    document.getElementById('portal')
  )
}
