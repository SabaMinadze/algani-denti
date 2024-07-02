import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Link href="/servicesandprices/prices"><Card name="თერაპიული სტომატოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices2"><Card name="ბავშვთა სტომატოლატოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices3"><Card name="ქირურგიული სტომატოლოგია" price=""/></Link>
    </div>
    <div className={styles.box}>
    <Link href="/servicesandprices/prices4"><Card name="ორთოპედია" price=""/></Link>
    <Link href="/servicesandprices/prices5"><Card name="ორთოდონტია" price=""/></Link>
    <Link href="/servicesandprices/prices6"><Card name="გნათოლოგია" price=""/></Link>
    </div>
    <div className={styles.box}>
    <Link href="/servicesandprices/prices7"><Card name="იმპლანტოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices8"><Card name="ესთეთიური სტომატოლოგია" price=""/></Link>
    <Link href="/servicesandprices/prices9"><Card name="პარადონტოლოგია" price=""/></Link>
    </div>
    

    </>
  )
}

export default page