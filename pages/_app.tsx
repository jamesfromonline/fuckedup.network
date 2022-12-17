import { AppProps } from "next/app"
import Layout from "../ui/Layout"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"

function FuckedUpNetworkApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default FuckedUpNetworkApp
