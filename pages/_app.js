import '../styles/globals.css'
import Navbar from "../src/components/Navbar/navbar";
function MyApp({ Component, pageProps }) {
  return (<>
  <Navbar />
  <Component {...pageProps} />
  </>)
}

export default MyApp
