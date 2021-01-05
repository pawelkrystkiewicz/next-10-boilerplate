import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Title } from '@styled/title'
import { useRouter } from 'next/router'

export default function Home(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/gsp" className={styles.card}>
            <Title>Static props &rarr;</Title>
            <a>To getStaticProps page</a>
          </a>

          <a href="/gsp/first" className={styles.card}>
            <Title>dynamic getStaticProps</Title>
            <p>To dynamic getStaticProps</p>
          </a>

          <a href="/gssp" className={styles.card}>
            <Title>getServerSideProps &rarr;</Title>
            <p>To getServerSideProps page</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <Title>Deploy &rarr;</Title>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
