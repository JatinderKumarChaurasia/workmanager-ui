import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
        <p>Hello</p>
      <footer className={"footer"}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/*<img src="/vercel.svg" alt="Vercel Logo" className={"logo"} />*/}
        </a>
      </footer>
    </div>
  )
}
