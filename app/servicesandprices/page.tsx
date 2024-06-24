import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'

function page() {
  return (
    <>
    <div className={styles.box}>
    <Card name="მოზრდილთა და ბავშვთა თერაპია" price="50 -200 ₾"/>
    <Card name="ბავშვთა და მოზრდითა ქირურგია" price="140 - 300 ₾"/>
    <Card name="პაროდონტოლოგია" price="375 - 490 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="გნათოლოგია" price="150 ₾"/>
    <Card name="ორთოდონტია" price="85 ₾ -დან"/>
    <Card name="ორთოპედია" price="150 - 250 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="დიაგნისტიკა" price="მკურნალობის ფასი ინდივიდუალურია"/>
    <Card name="ესტეტიური სტომატოლოგია" price="1450 ₾"/>
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
    <Card name="მუდმივი კბილის ექსტრაქცია" price="45 - 170 ₾"/>
    <Card name="სიბრძნის კბილის ექსტრაქცია" price="110 - 400 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="იმპლანტი" price="65 ₾"/>
    <Card name="სინუსლიფტინგი" price="800 ₾ -დან"/>
    <Card name="ღიმილის ციფრული დაგეგმარება" price="150 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="გვირგვინი" price="600 - 650 ₾"/>
    <Card name="ვინირი" price="700 ₾"/>
    <Card name="პროტეზი" price="510 - 2800 ₾"/>
    </div>
    <div className={styles.box}>
    <Card name="Invisalign" price="9000 - 14000 ₾"/>
    <Card name="მეტალის ბრეკეტ-სისტემა" price="1100 ₾ -დან"/>
    <Card name="კერამიკის ბრეკეტ-სისტემა" price="1500 ₾ -დან"/>
    </div>
    <div className={styles.box}>
    <Card name="ლინგვალური ბრეკეტ-სისტემა" price="4700 ₾"/>
    <Card name="რენტგენოლოგიური გამოკვლევა" price="20 - 85 ₾"/>
    </div>

    </>
  )
}

export default page