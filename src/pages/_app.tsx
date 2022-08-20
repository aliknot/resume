import type { AppProps } from 'next/app';
import '../scss/globals.scss';
import '../scss/inter.scss';
import '../../public/assets/font-icon/style.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
