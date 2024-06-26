import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Link href="/servicesandprices/prices"><Card name="თერაპიული სტომატოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices"><Card name="ბავშვთა სტომატოლატოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices"><Card name="ქირურგიული სტომატოლოგია" price=""/></Link>
    </div>
    <div className={styles.box}>
    <Link href="/servicesandprices/prices"><Card name="ორთოპედია" price=""/></Link>
    <Link href="/servicesandprices/prices"><Card name="ორთოდონტია" price=""/></Link>
    <Link href="/servicesandprices/prices"><Card name="გნათოლოგია" price=""/></Link>
    </div>
    <div className={styles.box}>
    <Link href="/servicesandprices/prices"><Card name="იმპლანტოლოგია" price="სტოტიში"/></Link>
    <Link href="/servicesandprices/prices"><Card name="ესთეთიური სტომატოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices"><Card name="ნაფლეთოვანი ოპერაცია" price=""/></Link>
    </div>
    

    </>
  )
}

export default page