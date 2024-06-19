import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Navbar from './components/Navbar/Navbar'
import Card1 from './components/Card1/Card1'
import Image from 'next/image'


function page() {
  return (
    <>
    <div className={styles.contentcontainer}>
      <Link href="/aboutus" className={styles.txt}>ჩვენს შესახებ</Link>
      <Link href="/stomatologi" className={styles.txt}>ჩვენი სტომატოლოგები</Link>
      <Link href="/achievements" className={styles.txt}>ჩვენი მიღწევები</Link>
      <Link href="/contactus" className={styles.txt2}>კონტაქტი</Link>
    </div>
    <br/>
    </>
  )
}

export default page
