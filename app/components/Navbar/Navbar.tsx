import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Burgernav from '../Burgernav/Burgernav'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
      <Link href="/"><Image src="/algani.png" height={170} width={150} alt="eror" className={styles.logo}/></Link>
      <Link href="/"><h1 className={styles.txt}>ალგანი დენტი</h1></Link>
      <Link href="/"><h1 className={styles.txt2}>სამედიცინო სასწავლო</h1></Link>
      <Link href="/"><h1 className={styles.txt2}>სტომატოლოგიური კლინიკა</h1></Link>
      </div>

    </>
  )
}

export default Navbar