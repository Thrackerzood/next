import Head from 'next/head'
import React, {useState} from 'react'
export default function Random  ():JSX.Element {
let [state,setState]:any = useState<{}>({data: ''})
   return(<>
   <Head>
      <title>{state.data.name ? `${state.data.name}` : 'рандом'}</title>
   </Head>
      <h1>random</h1>
   </>)
}