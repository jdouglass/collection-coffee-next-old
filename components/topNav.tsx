import Link from "next/link";
import styles from './topNav.module.css';
import Logo from '../public/collection-coffee-logo.svg';

const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link href='/'>
          <a>
            <Logo className={styles.navLogo} height={60} />
          </a>
        </Link>
        <div className={styles.navLinks}>
          <Link href='/collection'>
            <a>Collection</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNav;