import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Card name="კონსულტაცია დიაგნოსტიკაა" price="50 -200 ₾"/>
    <Card name="პროფესიული ჰიგიენა" price="140 - 300 ₾"/>
    <Card name="გათეთრებაა" price="375 - 490 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="კბილის დაბჟენა" price="150 ₾"/>
    <Card name="არხების მკურნალობა" price="85 ₾ -დან"/>
    <Card name="გათეთრება" price="150 - 250 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="ღრძილების კონსერვატიული მკურნალობა" price="მკურნალობის ფასი ინდივიდუალურია"/>
    <Card name="FGG თავისუფალი ღრძილოვანი ტრანსპლანტაციის ოპერაცია" price="1450 ₾"/>
    <Card name="ნაფლეთოვანი ოპერაცია (მინიმალურ-ინვაზიური ტექნიკა)" price="500 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="ნაფლეთოვანი ოპერაცია (დიდი ნაფლეთის ტექნიკა)" price="850 ₾"/>
    <Card name="შემაერთებელქსოვილოვანი ნაფლეთის ტრანსპლანტაცია სასიდან" price="450 ₾"/>
    <Card name="ღრძილის რეცესიის დახურვა" price="975 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="გვირგვინოვანი ნაწილის დაგრძელება" price="650 ₾"/>
    <Card name="გინგივექტომია" price="150 ₾"/>
    <Card name="ლაგამის კორექცია" price="300 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="ვესტიბულოპლასტიკა" price="500 ₾ -დან"/>
    <Card name="ალვეოლის პრეზერვაცია" price="650 ₾"/>
    <Card name="სარძევე კბილის მკურნალობა" price="40 - 220 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="ფისურების ჰერმეტიზაცია" price="65 ₾"/>
    <Card name="ალვეოლის პრეზერვაცია" price="650 ₾"/>
    <Card name="სარძევე კბილის მკურნალობა" price="40 - 220 ₾"/>
    </div>

    </>
  )
}

export default page