import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress
      color="#4553D9"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
      options={{ showSpinner: false }}
    />
    <Head>
      <title>Aswang Fansite. This was made for the love of aswang </title>

    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
