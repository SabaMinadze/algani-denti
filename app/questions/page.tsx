'use client'

import React from 'react'
import Contact from '../components/Contact/Contact'
import styles from './page.module.css'

function page() {
  return (
    <>
    <div className={styles.box}>
      <Contact/>
    </div>
    </>
  )
}

export default page