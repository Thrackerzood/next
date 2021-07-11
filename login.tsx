import Head from 'next/head'
import React , {useState, useEffect} from 'react'
import { MainAuth } from '../../styles/style'
import ajax from '../../middleware/ajax'
import Link from 'next/link'


export default function Auth ():JSX.Element {
   let [form, setForm]:any = useState<string | {}>({login: '', password: ''})
   function change(event:any){
      setForm({...form , [event.target.name]: event.target.value})
   }
   useEffect(() => {
      let loginElem:any = document.querySelector('.login')
      let buttonElem:any = document.querySelector('.button')
      let passwordElem:any = document.querySelector('.password')
   function validationLogin(login:any):any{
      if(login !== ''){
         if(true === /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(login)){
            loginElem.classList.remove('false')
            loginElem.classList.add('true')
         }else{
            loginElem.classList.remove('true')
            loginElem.classList.add('false')
         }
      }else{
         loginElem.classList.remove('false')
         loginElem.classList.remove('true')
      }
   }
   validationLogin(form.login)
   function validationPassword(password:any):any{
      if(password !== ''){
         if(password  && true === /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)){
            passwordElem.classList.remove('false')
            passwordElem.classList.add('true')
         }else{
            passwordElem.classList.remove('true')
            passwordElem.classList.add('false')
         }
      }else{
         passwordElem.classList.remove('false')
         passwordElem.classList.remove('true')
      }
   }
   validationPassword(form.password)
   function buttonCheck(){
      if(loginElem.classList.contains('true') && passwordElem.classList.contains('true')){
         buttonElem.classList.add('inDisabled')
         buttonElem.classList.remove('disabled')
      }else{
         buttonElem.classList.remove('inDisabled')
         buttonElem.classList.add('disabled')
      }
   }
   buttonCheck()
   }, [form])
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
               <input placeholder="Login" name="login" onChange={change} className="login"/>
               <input placeholder="Password" name="password" onChange={change} className="password"/>
               <button onClick={()=> ajax('http://127.0.0.1:5500/api/auth/login',form)} className="button disabled">Вход</button>
            </section>
         </section>
      </MainAuth>
   </>)
}