interface IForm {
   login: string,
   password: string,
}
let login:Boolean
let password:Boolean
let info:any

export function validationLog(form:IForm):any{
   if(form.login !== ''){
      login = false
      if(login === false){
         if(true === /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{1,19}$/.test(form.login)){
            login = true
         }
      }
   }
   if(form.password !== ''){
      password = false
      if(password === false){
         if(form.password  && true === /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(form.password)){
            password = true
         }
      }
   }
   if(login || password === true){
      info = regex(login,password) 
   }
   return info
}

function regex(login:Boolean,password:Boolean){
   let regex = {login,password}
   if((login === true || '') || (password === true || '')){
         console.log('regex: ', {login,password})
         login = false
         password = false
         return regex
   }
}