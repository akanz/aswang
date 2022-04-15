import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

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
    <Component {...pageProps} />
  </>
}

export default MyApp
