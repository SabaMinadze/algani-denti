import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function page() {
  return (
    <>
    <h1 className={styles.txt}>გამარჯობათ კეთილი იყო თქვენი მობრძანება ჩვენს მიღწევების გვერძე.</h1>
    <br/><br/>
    <div className={styles.box}>
        <Image src="/kbili1.jpg" width={480} height={300} alt="eror" className={styles.img}/>
        <br/><br/>
        <Image src="/kbili2.jpg" width={480} height={300} alt="eror" className={styles.img}/>
        <br/><br/>
        <Image src="/kbili2.jpg" width={480} height={300} alt="eror" className={styles.img}/>
        <br/><br/>
    </div>
    <br/><br/>
    <div className={styles.box}>
      <Image src="/kbili4.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili5.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili6.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
    </div>
    <br/><br/>
    <div className={styles.box}>
      <Image src="/kbili7.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili8.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili9.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
    </div>
    <br/><br/>
    <div className={styles.box}>
      <Image src="/kbili10.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili11.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili12.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
    </div>
    <br/><br/>
    <div className={styles.box}>
      <Image src="/kbili14.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili15.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
      <Image src="/kbili16.jpg" width={480} height={300} alt="eror" className={styles.img}/>
      <br/><br/>
    </div>
    </>
  )
}

export default page