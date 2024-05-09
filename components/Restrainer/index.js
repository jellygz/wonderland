import React from 'react'
import styles from './Restrainer.module.css'

export default function Restrainer({children}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
    </div>
  )
}
