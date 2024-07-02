import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'
import Link from 'next/link'

function page() {
  return (
    <>
    <br/>
    <Card2 txt="კარიესის მკურნალობა: 130₾ - 180₾"/>
    <br/>
    <Card2 txt="პულპიტი, პერიოდონტიტი: 150₾ - 350₾"/>
    <br/>
    <Card2 txt="რემთერაპია: 30₾"/>
 

    </>
  )
}

export default page