import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';

import store from '../lib/store';

import '../styles/index.scss';

const Entry = ({ Component, pageProps }: AppProps) => (
	<Provider store={ store } >
		<Head>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<meta
				name='description'
				content='Personal Portfolio Site'
			/>
			<title>Jack Standbridge</title>
		</Head>
		<Component { ...pageProps } />
	</Provider>
);

export default Entry;