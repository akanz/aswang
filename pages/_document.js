import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="description" content="Aswang brings out the creative side of it's community." />
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