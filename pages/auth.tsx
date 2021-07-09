import Head from 'next/head'
import React , {useState, useEffect} from 'react'
import {MainAuth} from '../styles/style'
import ajax from '../middleware/ajax'

interface IUserRegistration {
   login: string,
   email: string,
   password: string,
   repeat: string,
}
interface IUserLogin {
   login: string,
   password: string,
}

export default function Auth ():JSX.Element {
   let [state, setState]:any = useState<boolean>(false)
   let [userStateReg, userSetStateRegistration]:any = useState<IUserRegistration>({login: '',email: '', password: '', repeat: ''})
   let [userStateLog, userSetStateLogin]:any = useState<IUserLogin>({login: '', password: ''})
   function changeRegistration(event:any){
      userSetStateRegistration({ ...userStateReg, [event.target.name]: event.target.value})
      console.log(userStateReg)
   }
   function changeLogin(event:any){
      userSetStateLogin({ ...userStateLog, [event.target.name]: event.target.value})
      console.log(userStateLog)
   }
   return(<>
      <Head>
         <title>{state ? 'Регистрация' : 'Вход'}</title>
      </Head>
      <MainAuth>
      <section>
         <section>
            <p onClick={():boolean => setState(!state)} className={state ? "" : "active" }>Регистрация на сайте</p>
            <p onClick={():boolean => setState(!state)} className={state ? "active" : "" }>Вход</p>
         </section>
         {state ? (
            <section className='form'>
               <p>РЕГИСТРАЦИЯ НА САЙТЕ</p>
               <input placeholder="Login" name="login" onKeyUp={(event)=> {changeRegistration(event)} } onChange={changeRegistration}/>
               <input placeholder="Email" name="email" onKeyUp={changeRegistration} onChange={changeRegistration}/>
               <input placeholder="Password" name="password" onKeyUp={changeRegistration} onChange={changeRegistration}/>
               <input placeholder="Password" name="repeat" onKeyUp={changeRegistration} onChange={changeRegistration}/>
               <button onClick={()=> ajax('http://127.0.0.1:5500/api/auth/registration',userStateReg)}>Регистрация</button>
            </section>
         ):(
            <section className='form'>
               <p>ВХОД НА САЙТ</p>
               <p>добро пожаловать. снова</p>
               <input placeholder="Email or Username" name="login" onKeyUp={changeLogin} onChange={changeLogin}/>
               <input placeholder="Password" name="password" onKeyUp={changeLogin} onChange={changeLogin}/>
               <button onClick={()=> ajax('http://127.0.0.1:5500/api/auth/login',userStateLog)}>Вход</button>
            </section>
         )}
      </section>
      </MainAuth>
   </>)
}