import Link from "next/link"
import { Page404 } from "../styles/style"

export default function ErrorPage(){
   return (<Page404>
         <h1>Error 404</h1>
         <p><Link href="/"><a>Отправиться на главную</a></Link></p>  
   </Page404>)
}