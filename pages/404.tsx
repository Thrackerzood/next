import Link from "next/link"

export default function ErrorPage(){
   return (<>
      <h1>Error 404</h1>
      <p><Link href="/"><a>Отправиться в хлев</a></Link></p>
   </>)
}