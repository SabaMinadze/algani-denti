import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Burgernav from '../Burgernav/Burgernav'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
      <Link href="/"><Image src="/alganident.jpg" height={170} width={150} alt="eror" className={styles.logo}/></Link>
         <h1 className={styles.txt}>ალგანი დენტი</h1>
         <h1 className={styles.txt2}>სტომატოლოგიური კლინიკა</h1>
      </div>

    </>
  )
}

export default Navbar