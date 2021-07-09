import Head from 'next/head'
import {HomeMain} from '../styles/style'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <HomeMain>home</HomeMain>
    </>
  )
}