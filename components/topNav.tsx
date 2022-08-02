import Link from "next/link";
import styles from './topNav.module.css';

const TopNav = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/products'>
        <a>Products</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
  )
}

export default TopNav;