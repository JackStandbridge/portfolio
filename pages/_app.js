import { Provider } from 'react-redux';
import Head from 'next/head';

import store from '../lib/store';

const Entry = ({ Component, pageProps }) => (
	<Provider store={ store } >
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		</Head>
		<Component { ...pageProps } />
	</Provider>
);

export default Entry;
