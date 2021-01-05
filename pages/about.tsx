import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Title } from '@styled/title'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>About</Title>
      This is about page
    </div>
  )
}
