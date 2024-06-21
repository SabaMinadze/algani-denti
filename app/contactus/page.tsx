import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Map from '../components/Map/Map'

function contactus() {
  return (
    <>
    <div className={styles.baneri}>
      <Link href="https://www.facebook.com/AlganiDent?locale=ka_GE"><h1 className={styles.txt}>კონტაქტი</h1></Link>
    </div>
    

    <h1 className={styles.number}>დაგვირეკეთ ნომერზე: 574 42 42 38</h1>
    <h1 className={styles.number2}>მისამართი: თბილისი დიდუბე ვახუშტი ბაგრატიონის 19, Tbilisi, Georgia</h1>
    <h1 className={styles.number1}>ხაზზე ვართ ყოველთვის პატივისცემით მარიტა კვირიკაშვილი.</h1>
    <br/><br/><br/>
    <center><Map/></center>
    </>
  )
}

export default contactus