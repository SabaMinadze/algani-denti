import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import Link from 'next/link'

function page() {
  return (
    <>
    <Card2 txt="კონსლულტაცია: 30₾"/>
    <br/>
    <Card2 txt="კონსლულტაცია: 30₾"/>
    <Card2 txt="კონსლულტაცია: 30₾"/>
    <Card2 txt="კონსლულტაცია: 30₾"/>
    </>
  )
}

export default page