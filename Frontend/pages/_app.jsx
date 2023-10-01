import '@/styles/globals.css';
import { ClientesProvider } from '@/context/ClientesProvider';

export default function App({ Component, pageProps }) {
    return (
        <ClientesProvider>
            <Component {...pageProps} />
        </ClientesProvider>
    )
}
