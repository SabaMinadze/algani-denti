import React from 'react'
import styles from './Card.module.css'

function Card(props:any) {
  return (
    <>
    <div className={styles.card}>
        <br/>
        <h1 className={styles.txt}>{props.name}</h1>
        <br/>
        <h3 className={styles.price}>{props.price}</h3>

    </div>
    </>
  )
}

export default Card