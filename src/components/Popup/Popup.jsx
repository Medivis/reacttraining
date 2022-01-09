import { useRef, useState } from "react"
import useClickOutside from "../../hooks/useClickOutside/useClickOutside"
import styles from './Popup.module.scss'

export default function Popup(props) {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  useClickOutside(modalRef, () => {
    if (open) setOpen(false)
  })

  const popupStyle = `${styles.popup}
  ${open ? styles.open : ""} 
  ${props.align === "right" ? styles.alignRight : styles.alignLeft}`

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={() => {setOpen(true)}}>
        {props.button}
      </button>
      <div className={popupStyle} ref={modalRef}>
        {props.children}
      </div>
    </div>
  )
}
