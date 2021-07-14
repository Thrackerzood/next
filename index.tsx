import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {HomeMain} from '../styles/style'
import ajax from '../middleware/ajax'

export default function Home(): JSX.Element {
  let [state = {data: []}, setState]:any = useState({data: []})
  let result = async() => {
    let response:Promise<string[]> = await ajax('http://127.0.0.1:5500/api/home')
    setState({data: response})
  }
  useEffect(()=>{ result() }, [])
  let data = state.data.map((element:any | {},index:number):JSX.Element => {
    return(
      <section key={index}>
          <Image alt={element.show_name_eng} 
          src={'http://localhost/next%20js/my-app/public' + element.show_picture_1980}
          width={200} height={300} layout="responsive" loading='lazy'/>
        <a href={element.show_name_eng}><p>{element. show_name_eng}</p></a>
      </section>
    )
  })
  console.log(state.data)
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <HomeMain>
        <section>
          {data}
        </section>
        <section>
          
        </section>
      </HomeMain>
    </>
  )
}