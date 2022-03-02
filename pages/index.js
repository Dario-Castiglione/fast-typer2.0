import Head from 'next/head'
import Image from 'next/image'
import Game from '../components/game'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Typer 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />
    <Game />
     
    </div>
  )
}
