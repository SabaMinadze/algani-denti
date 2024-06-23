import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Card1 from '../components/Card1/Card1'
import Link from 'next/link'


function page() {
  return (
    <>
    <br/><br/><br/>
    <div className={styles.box}>
    <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/kokasinfo.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/>
      <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/mariam.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/>
      <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/marika.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/>
      <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/qeti.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/> 
    </div>
    <br/><br/>
    <div className={styles.box}>
    <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/salome.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/>
      <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/gina.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/>
      <Link href="https://www.facebook.com/AlganiDent/?locale=ka_GE"><Image src="/qetic.jpg" height={450} width={350} alt='erro' className={styles.img1}/></Link>
      <br/><br/>
      <Link href="https://www.instagram.com/niniminadze16/"><Card1 name="ნინი მინაძე" age="17 წლის" position="ჭრა-კერვა" image={<Image src="/nini.jpg" height={300} width={300} alt='erro'/>}/></Link>
      <br/><br/>
      <Link href="https://www.instagram.com/guramdiasamize/"><Card1 name="გურამ დიასამიძე" age="16 წლის" position="30 გრადუსიანი კუთხის კოტანგესის გამომთვლელი" image={<Image src="/gurami.jpg" height={290} width={300} alt='erro'/>}/></Link>
      <br/><br/>
    </div>
    <br/><br/>
    </>
  )
}

export default page