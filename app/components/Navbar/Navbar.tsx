import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
      <Link href="/"><Image src="/alganident.jpg" height={170} width={150} alt="eror" className={styles.logo}/></Link>
          <center><h1 className={styles.txt}>სტომატოლოგიური კლინიკა ალგანი დენტი / Algani Dent </h1></center>
      </div>

    </>
  )
}

export default Navbar