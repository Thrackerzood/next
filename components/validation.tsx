interface IForm {
   login: string,
   email: string,
   password: string,
   repeat: string,
}
let login:Boolean
let email:Boolean
let password:Boolean
let info:any
export function validation(form:IForm):any{
   if(form.login !== ''){
      login = false
      if(login === false){
         if(true === /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(form.login)){
            login = true
         }
      }
   }
   if(form.email !== ''){
      email = false
      if(email === false){
         if((true === /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email))){
            email = true
         }
      }
   }
   if(form.password && form.repeat !== ''){
      password = false
      if(password === false){
         if(form.password === form.repeat && true === /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password)){
            password = true
         }
      }
   }
   if(login || email || password === true){
      info = regex(login,email,password) 
   }
   return info
}

function regex(login:Boolean,email:Boolean,password:Boolean){
   let regex = {login,email,password}
   if((login === true || '') || (email === true || '') || (password === true || '')){
         console.log('regex: ', {login,email,password})
         login = false
         email = false
         password = false
         return regex
   }
}