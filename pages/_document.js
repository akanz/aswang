import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content="AswangTribe brings out the creative side of it's community members." />
                <meta property="og:title" content="" />
                <meta property="og:description" content="AswangTribe brings out the creative side of it's community members." />
                <meta property="og:image" content="https://i.ibb.co/xMm0cf7/aswang.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://aswangfansite.vercel.app/" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:description" content="AswangTribe brings out the creative side of it's community members." />
                <meta name="twitter:image" content="https://i.ibb.co/xMm0cf7/aswang.jpg" />
                <link rel="icon" href="/aswang.jpg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Lato&family=Nunito&family=Public+Sans:wght@300&display=swap"
                rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}