import React, {useState} from 'react'
import Link from 'next/link'
import {NavStyle} from '../styles/style'
import { useRouter } from 'next/dist/client/router'

export  const Nav = ():JSX.Element => {
   let [state, setState]:any = useState(false)
   const router = useRouter()
   return (<NavStyle className={state ? 'sidebar_open_nav' : 'sidebar_close_nav'}>
      <nav className={state ? 'sidebar_open_header' : 'sidebar_close_header'}>
         <div onClick={() => setState(!state)} className={state ? 'sidebar_open' : 'sidebar_close'}>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <ul className={state ? 'open' : 'close'}>
            <li><Link href='/'><a className={router.pathname == '/' ? 'active' : ''}>Домашняя</a></Link></li>
            <li><Link href='/random'><a className={router.pathname == '/random' ? 'active' : ''}>Рандомная</a></Link></li>
            <li><Link href='/chat'><a className={router.pathname == '/chat' ? 'active' : ''}>Чат</a></Link></li>
            <li><Link href='/auth/login'><a className={router.pathname == '/auth' || '/auth/login' || '/auth/registration' ? 'active' : ''}>Вход</a></Link></li>
         </ul>
      </nav>
      </NavStyle>)
}