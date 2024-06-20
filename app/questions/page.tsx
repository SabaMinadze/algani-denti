import React from 'react'
import styles from './page.module.css'

function page() {
  return (
    <>
    <center><div className={styles.box}>
      <form action="https://www.youtube.com/watch?v=zHug4Lx0HrI"> 
        <label htmlFor="" className={styles.txt}>სახელი: </label>
        <br/>
        <input type="text" name="" id="" placeholder='Name' required className={styles.name}/>
        <br/><br/>
        <label htmlFor="" className={styles.txt}>ელ-ფოსტა: </label>
        <br/>
        <input type="email" name="" id="" placeholder="E-mail" required className={styles.email}/>
        <br/><br/>
        <label htmlFor="" className={styles.txt}>წერილი: </label>
        <br/>
        <input type="text" name="" id="" placeholder="Enter Your Message" required className={styles.info}/>
        <br/><br/>
        <input type="submit" value="მოგვწერეთ" className={styles.submit}/>
      </form>
    </div></center>
    </>
  )
}

export default page