import type { AppProps } from 'next/app'
import { Global } from '../styles/style'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'


function MyApp({ Component}: AppProps):JSX.Element {
  return (<>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" ></meta>
    <Global/>
    <Nav/>
    <Component />
    <Footer/>
    </>)
}
export default MyApp
