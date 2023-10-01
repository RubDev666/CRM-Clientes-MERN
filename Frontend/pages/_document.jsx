import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
            </Head>
            <body className='min-h-screen bg-gray-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
