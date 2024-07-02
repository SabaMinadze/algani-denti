import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'

function page() {
  return (
    <>
        <br/>
        <Card2 txt="მხატვრული რესტავრაცია: 200₾ - 250₾"/>
        <br/>
        <Card2 txt="მერილენდის ხიდი: 300₾ - 350₾"/>
        <br/>
        <Card2 txt="სკაისი: 150₾ დან"/>
        <br/>
        <Card2 txt="გათეთრება: 350₾ - 700₾"/>
        <br/>


    </>
  )
}

export default page