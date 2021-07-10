import Head from 'next/head'
import React , {useState, useEffect} from 'react'
import { MainAuth } from '../../styles/style'
import ajax from '../../middleware/ajax'
import { validationLog}  from '../../components/validationLogin'
import Link from 'next/link'
interface IUserLogin {
   login: string,
   password: string,
}

export default function Auth ():JSX.Element {
   let objt:any
   let [userStateLog, userSetStateLogin]:any = useState<IUserLogin>({login: '', password: ''})
   function changeLogin(event:any){
      userSetStateLogin({ ...userStateLog, [event.target.name]: event.target.value})
      objt = validationLog(userStateLog)
      let login:any = document.querySelector('.login')
      let password:any = document.querySelectorAll('.password')

      if(objt?.login === true){
         login.classList.add('true')
         login.classList.remove('false')
      }
      if(objt?.password === true){
         password[0].classList.add('true')
         password[0].classList.remove('false')
      }
      if(objt?.login === false){
         login.classList.add('false')
         login.classList.remove('true')
      }
      if(objt?.password === false){
         password[0].classList.add('false')
         password[0].classList.remove('true')
      }
      if(objt?.login && objt?.password === true){
         let button:any = document.querySelector(".button")
         button.disabled = false
         button.classList.add('inDisabled')
         button.classList.remove('disabled')
      }
      if(objt?.login && objt?.password === false){
         let button:any = document.querySelector(".button")
         button.disabled = true
         button.classList.add('disabled')
         button.classList.remove('inDisabled')
      }
   }
   return(<>
      <Head>
         <title>Вход</title>
      </Head>
      <MainAuth>
      <section>
         <section>
         <Link href='/auth/registration'><a><p className="active">Регистрация на сайте</p></a></Link>
         </section>
         <section className='form'>
            <p>ВХОД НА САЙТ</p>
            <p>добро пожаловать. снова</p>
            <input placeholder="Login" name="login" onKeyUp={changeLogin} onChange={changeLogin} className="login"/>
            <input placeholder="Password" name="password" onKeyUp={changeLogin} onChange={changeLogin} className="password"/>
            <button onClick={()=> ajax('http://127.0.0.1:5500/api/auth/login',userStateLog)} className="button disabled">Вход</button>
         </section>
      </section>
      </MainAuth>
   </>)
}