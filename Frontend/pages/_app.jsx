import '@/styles/globals.css';

import { ClientesProvider } from '@/context/ClientesProvider';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"; 

config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
    return (
        <ClientesProvider>
            <Component {...pageProps} />
        </ClientesProvider>
    )
}
