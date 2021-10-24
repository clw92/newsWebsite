import '../styles/globals.scss'
import styles from '../styles/Home.module.scss'
import {AuthProvider} from "../components/context/AuthContext";


function MyApp({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>
}

export default MyApp
