import React from 'react'
import Image from 'next/image'
import styles from './MainNav.module.css'
import Link from "next/link";
import { useState } from 'react';

export default function MainNav() {
  
  const [isOpen, setIsOpen] = useState(false)
  const [closeEvent, setCloseEvent] = useState("")

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setCloseEvent("hidden")
  }

  console.log(isOpen)

  return (
    <div className={styles.container}>
        <nav className={isOpen ? styles.overlay : `${styles.overlayClose} ${closeEvent}`}>
        <Image onClick={handleClose} className={styles.backButton} src="/Group 1.png" alt="Back Button" width={35} height={35} />
          <ul className={styles.text}>
            <li className={styles.link}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">Tutorial</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about">Resources</Link>
            </li>
          </ul>
          <p className={styles.about}>&copy; Jillian, Celine</p>
      </nav>
        <div className={styles.icons}>
          <Image src="/Rabbit Icon.svg" alt="Rabbit" width={35} height={35} />
          <Image className={styles.logo} src="/Wonderland.png" alt="Logo" width={150} height={55} />
          <Image className={styles.hamburger} onClick={handleOpen} src="/Hamburger Menu Icon.svg" alt="Hamburger Menu" width={35} height={35} />
        </div>
    </div>
  )
}
