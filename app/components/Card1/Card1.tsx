import React from 'react'
import styles from './Card1.module.css'
import Image from 'next/image'

function Card1(props:any) {
  return (
    <>
    <div className={styles.card}>
      <h2 className={styles.txt}>{props.name}</h2>
      <br/>
      <p className={styles.txt1}>{props.age}</p>
      <br/>
      <p className={styles.txt2}>{props.position}</p>
      <br/>
      <p className={styles.img}>{props.image}</p>

    </div>
    </>
  )
}

export default Card1