import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'

function Card(props:any) {
  return (
    <>
    <div className={styles.card}>
      <h2 className={styles.txt}>მარიტა კვირიკაშვილი</h2>
      <br/>
      <p className={styles.txt1}>35 წლის</p>
      <br/>
      <p className={styles.txt2}>ქირურგი</p>
      <br/>
      <p className={styles.txt2}><Image src="/marita.jpg" height={300} width={250} alt='erro'/></p>




    </div>
    </>
  )
}

export default Card