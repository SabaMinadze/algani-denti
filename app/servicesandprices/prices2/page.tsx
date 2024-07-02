import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'

function page() {
  return (
    <>
        <br/>
        <Card2 txt="კარიესი: 60₾ - 80₾"/>
        <br/>
        <Card2 txt="პულტიტი, პერიოდიტიტი: 90₾ - 150₾"/>
        <br/>
        <Card2 txt="სარძევე კბილის მარტივი ექსტრაცია: 30₾ - 60₾"/>
        <br/>
        <Card2 txt="წმენდა: 80₾ - 120₾"/>
        <br/>
        <Card2 txt="რთული ექსქტრაქცია: 50₾ - 80₾"/>
        <br/>
    </>
  )
}

export default page