import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import LocalStorage from '../components/LocalStorage';
import { useScrollRestoration } from '../lib/hooks';

import store from '../lib/store';

import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
	useScrollRestoration();

	return (
		<Provider store={ store }>
			<LocalStorage>
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
			</LocalStorage>
		</Provider>
	)
};

export default App;
