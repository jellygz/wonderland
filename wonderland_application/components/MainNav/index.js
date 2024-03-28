import React from 'react'
import Image from 'next/image'
import styles from './MainNav.module.css'

export default function MainNav() {
  return (
    <div className={styles.icons}>
        <Image src="/Rabbit Icon.svg" alt="Rabbit" width={35} height={35} />
        <Image src="/Hamburger Menu Icon.svg" alt="Hamburger Menu" width={35} height={35} />
    </div>
  )
}
