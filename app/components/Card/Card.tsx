import React from 'react'
import styles from './Card.module.css'

function Card(props:any) {
  return (
    <>
    <div className={styles.card}>
        <h1 className={styles.txt}>{props.name}</h1>

    </div>
    </>
  )
}

export default Card