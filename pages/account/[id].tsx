import { useRouter } from "next/dist/client/router"
import React, {useState} from 'react'
import Head from 'next/head'

export default function Account ():JSX.Element {
   let [state,setState]:any = useState<{}>({data: ''})
   const router = useRouter()
   return (<>
      <Head>
      <title>{state.data = null || undefined ? `пользователь: ${state.data.user}` : 'Пользователь не найден!'}</title>
      </Head>
   </>)
}