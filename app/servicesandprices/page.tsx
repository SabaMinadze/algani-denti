import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Card name="კონსულტაცია დიაგნოსტიკაა"/>
    <Card name="პროფესიული ჰიგიენა"/>
    <Card name="გათეთრებაა"/>
    </div>
    <div className={styles.box}>
    <Card name="კბილის დაბჟენა"/>
    <Card name="გათეთრება"/>
    <Card name="გათეთრება"/>
    </div>

    </>
  )
}

export default page