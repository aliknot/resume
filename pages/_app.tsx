import type { AppProps } from 'next/app';
import '../scss/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
