import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/index'
import { Heebo } from '@next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${heebo.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
