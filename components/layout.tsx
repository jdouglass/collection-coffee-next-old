import Head from "next/head";
import styles from './layout.module.css';
import TopNav from "./topNav";

export default function Layout({ children }: any) {
  return (
      <>
        <Head>
          <title>Collection Coffee</title>
        </Head>
        <TopNav/>
        <main className={styles.main}>
          {children}
        </main>
      </>
  )
}