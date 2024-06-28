import React from 'react'
import styles from './Card2.module.css'

function Card2(props:any) {
  return (
    <div className={styles.box}>
      <h1 className={styles.txt}>{props.txt}</h1>


    </div>
  )
}

export default Card2