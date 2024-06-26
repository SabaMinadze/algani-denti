import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Video from './components/Video/Video'
import styles from './page.module.css'
import Burgernav from './components/Burgernav/Burgernav'
import Link from 'next/link'


function page() {
  return (
    <>
    <div className={styles.box}>
    <Subnav/>
    <Burgernav/>
    </div>
    </>
  )
}

export default page
