import '@/styles/globals.css';
import Script from 'next/script';
import { ClientesProvider } from '@/context/ClientesProvider';

export default function App({ Component, pageProps }) {
    return (
        <ClientesProvider>
            <Component {...pageProps} />
            <Script src='https://kit.fontawesome.com/c4254e24a8.js'/>
        </ClientesProvider>
    )
}
