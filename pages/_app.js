import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
          integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
          crossorigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
