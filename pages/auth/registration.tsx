import Head from 'next/head'
import React , {useState, useEffect} from 'react'
import {MainAuth} from '../../styles/style'
import ajax from '../../middleware/ajax'
import { validation } from '../../components/validation'
import Link from 'next/link'

interface IUserRegistration {
   login: string,
   email: string,
   password: string,
   repeat: string,
}

export default function Auth ():JSX.Element {
   let obj:any
   let [userStateReg, userSetStateRegistration]:any = useState<IUserRegistration>({login: '',email: '', password: '', repeat: ''})
   function changeRegistration(event:any){
      userSetStateRegistration({ ...userStateReg, [event.target.name]: event.target.value})
      obj = validation(userStateReg)
      let login:any = document.querySelector('.login')
      let email:any = document.querySelector('.email')
      let password:any = document.querySelectorAll('.password')
      if(obj?.login === true){
         login.classList.add('true')
         login.classList.remove('false')
      }
      if(obj?.email === true){
         email.classList.add('true')
         email.classList.remove('false')
      }
      if(obj?.password === true){
         password[0].classList.add('true')
         password[1].classList.add('true')
         password[0].classList.remove('false')
         password[1].classList.remove('false')
      }
      if(obj?.login === false){
         login.classList.add('false')
         login.classList.remove('true')
      }
      if(obj?.email === false){
         email.classList.add('false')
         email.classList.remove('true')
      }
      if(obj?.password === false){
         password[0].classList.add('false')
         password[1].classList.add('false')
         password[0].classList.remove('true')
         password[1].classList.remove('true')
      }
      if(obj?.login && obj?.email && obj?.password === true){
         let button:any = document.querySelector(".button")
         button.disabled = false
         button.classList.add('inDisabled')
         button.classList.remove('disabled')
      }
      if(obj?.login && obj?.email && obj?.password === false){
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
         <Link href='/auth/login'><a><p className="active">Вход на сайт</p></a></Link>
         </section>
            <section className='form'>
               <p>РЕГИСТРАЦИЯ НА САЙТЕ</p>
               <input placeholder="Login" name="login" onKeyUp={changeRegistration} onChange={changeRegistration} className="login"/>
               <input placeholder="Email" name="email" onKeyUp={changeRegistration} onChange={changeRegistration} className="email"/>
               <input placeholder="Password" name="password" onKeyUp={changeRegistration} onChange={changeRegistration} className="password"/>
               <input placeholder="Password" name="repeat" onKeyUp={changeRegistration} onChange={changeRegistration} className="password"/>
               <button onClick={()=> ajax('http://127.0.0.1:5500/api/auth/registration',userStateReg)} className="button disabled">Регистрация</button>
            </section>
      </section>
      </MainAuth>
   </>)
}