import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Card name="კონსულტაცია დიაგნოსტიკაა" price="50 -200 ₾"/>
    <Card name="პროფესიული ჰიგიენა" price="140 - 300 ₾"/>
    <Card name="გათეთრებაა"/>
    </div>
    <div className={styles.box}>
    <Card name="კბილის დაბჟენა"/>
    <Card name="არხების მკურნალობა"/>
    <Card name="გათეთრება"/>
    </div>

    </>
  )
}

export default page