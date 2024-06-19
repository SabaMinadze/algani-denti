import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Card1 from '../components/Card1/Card1'


function page() {
  return (
    <>
    <br/><br/><br/>
    <div className={styles.box}>
      <Card1 name="მარიტა კვირიკაშვილი" age="35 წლის" position="ქირურგი" image={<Image src="/marita.jpg" height={300} width={300} alt='erro'/>}/>
      <br/><br/>
      <Card1 name="ნინი მინაძე" age="17 წლის" position="ჭრა-კერვა" image={<Image src="/nini.jpg" height={300} width={300} alt='erro'/>}/>
      <br/><br/>
      <Image src="/kokasinfo.jpg" height={570} width={400} alt='erro' className={styles.img1}/>/
      <br/><br/>
    </div>
    </>
  )
}

export default page