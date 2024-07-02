import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'

function page() {
  return (
    <>
        <br/>
        <Card2 txt="პროთეზირება: 250₾ - 700₾"/>
        <br/>
        <Card2 txt="ცირკონოკერამიკა: 450₾ - 600₾"/>
        <br/>
        <Card2 txt="მეტალოკერამიკა: 180₾ - 250₾"/>
        <br/>

    </>
  )
}

export default page