import Head from 'next/head'
import React , {useState, useEffect} from 'react'
import {MainAuth} from '../../styles/style'
import ajax from '../../middleware/ajax'
import Link from 'next/link'

export default function Auth ():JSX.Element {
   let [form, setForm]:any = useState<string | {}>({login: '', password: '',repeat: '', email: ''})
   let [response = {data: []}, setResponse]:any = useState({data: []})
   function change(event:any){
      setForm({...form , [event.target.name]: event.target.value})
   }
   useEffect(() => {
      let loginElem:any = document.querySelector('.login')
      let emailElem:any = document.querySelector('.email')
      let repeatElem:any = document.querySelector('.repeat')
      let buttonElem:any = document.querySelector('.button')
      let passwordElem:any = document.querySelector('.password')
      let response:any = document.querySelector('#errorResponse')
      let loginCheck: boolean = false
      let emailCheck: boolean = false
      let passwordCheck: boolean = false
   function validationLogin(login:any):any{
   if(loginCheck !== true){
      if(login !== ''){
         if(true === /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(login)){
            loginElem.classList.remove('false')
            loginElem.classList.add('true')
            response.textContent = 'заполните форму'
            response.classList.add('good')
            response.classList.remove('error')
         }else{
            loginElem.classList.remove('true')
            loginElem.classList.add('false')
            response.textContent = 'логин не может начинаться с цифр и быть меньше 2'
            response.classList.add('error')
            response.classList.remove('good')
         }
      }else{
         loginElem.classList.remove('false')
         loginElem.classList.remove('true')
      }
   }
}
   validationLogin(form.login)
   function validationPassword(password:any,repeat:any):any{
      if(password !== '' && repeat !== ''){
         if(password  && true === /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password) && password === repeat){
            passwordElem.classList.remove('false')
            passwordElem.classList.add('true')
            repeatElem.classList.remove('false')
            repeatElem.classList.add('true')
         }else{
            passwordElem.classList.remove('true')
            passwordElem.classList.add('false')
            repeatElem.classList.remove('true')
            repeatElem.classList.add('false')
            response.textContent = 'пароль должен быть не меньше 8 символов и содержать буквы большого и малого регистра'
            response.classList.add('error')
            response.classList.remove('good')
         }
      }else{
         passwordElem.classList.remove('false')
         passwordElem.classList.remove('true')
         repeatElem.classList.remove('false')
         repeatElem.classList.remove('true')
      }
   }
   validationPassword(form.password,form.repeat)
   function validationEmail(email:any):any{
      if(email !== ''){
         if(true === /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            emailElem.classList.remove('false')
            emailElem.classList.add('true')
            response.textContent = 'заполните форму'
            response.classList.add('good')
            response.classList.remove('error')
         }else{
            emailElem.classList.remove('true')
            emailElem.classList.add('false')
            response.textContent = 'email не подходящий'
            response.classList.add('error')
            response.classList.remove('good')
         }
      }else{
         emailElem.classList.remove('false')
         emailElem.classList.remove('true')
      }
   }
   validationEmail(form.email)
   function buttonCheck(){
      if(loginElem.classList.contains('true') && emailElem.classList.contains('true') && passwordElem.classList.contains('true')){
         buttonElem.classList.add('inDisabled')
         buttonElem.classList.remove('disabled')
         response.textContent = 'можете отправить!'
      }else{
         buttonElem.classList.remove('inDisabled')
         buttonElem.classList.add('disabled')
      }
   }
   buttonCheck()
   }, [form, response])
   async function ajaxLoader(url:any, form:any){
      let responses:any = await ajax(url, form)
      setResponse({data: responses})
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
               <p id="errorResponse" className={response.data.body ? 'error' : 'good'}>{response.data.body ? response.data.body : 'заполните форму'}</p>
               <input placeholder="Login" name="login" className="login"  onChange={change}/>
               <input placeholder="Email" name="email" className="email"  onChange={change}/>
               <input placeholder="Password" name="password" className="password"  onChange={change}/>
               <input placeholder="Password" name="repeat" className="repeat"  onChange={change}/>
               <button onClick={()=> ajaxLoader('http://127.0.0.1:5500/api/auth/registration', form)} className="button disabled">Регистрация</button>
            </section>
      </section>
      </MainAuth>
   </>)
}