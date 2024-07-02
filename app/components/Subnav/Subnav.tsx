import React from 'react'
import styles from './Subnav.module.css'
import Link from 'next/link'

function Subnav() {
  return (
    <>
    <div className={styles.contentcontainer}>
      <Link href="/aboutus" className={styles.txt}>ჩვენს შესახებ</Link>
      <Link href="/stomatologi" className={styles.txt}>ჩვენი სტომატოლოგები</Link>
      <Link href="/achievements" className={styles.txt}>ჩვენი მიღწევები</Link>
      <Link href="/questions" className={styles.txt}>კითხვები</Link>
      <Link href="/servicesandprices" className={styles.txt7}>სერვისები და ფასები</Link>
      <Link href="/contactus" className={styles.txt2}>კონტაქტი</Link>
    </div>
    <br/>
    </>
  )
}

export default Subnav