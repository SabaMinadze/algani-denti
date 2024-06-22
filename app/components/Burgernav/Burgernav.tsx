// components/HamburgerMenu.js
import Link from 'next/link';
import styles from './Burgernav.module.css'

const Burgernav = () => (
  <>
    <label className={styles.hamburgerMenu}>
            <input type="checkbox" />
          </label>
          <aside className={styles.sidebar}>
            <nav>
            <Link href="/aboutus" className={styles.txt}><div>ჩვენს შესახებ</div></Link>
            <br/>
            <Link href="/stomatologi" className={styles.txt}><div>ჩვენი სტომატოლოგები</div></Link>
            <br/>
            <Link href="/achievements" className={styles.txt}><div>ჩვენი მიღწევები</div></Link>
            <br/>
            <Link href="/questions" className={styles.txt}><div>კითხვები</div></Link>
            <br/>
            <Link href="/servicesandprices" className={styles.txt}><div>სერვისები და ფასები</div></Link>
            <br/><br/><br/><br/>
            <Link href="/contactus" className={styles.txt2}><div>კონტაქტი</div></Link>
            </nav>
          </aside>
  </>
);

export default Burgernav;