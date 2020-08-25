import { Provider } from 'react-redux';

import store from '../lib/store';

import '../styles/index.scss';

const Entry = ({ Component, pageProps }) => (
	<Provider store={ store } >
		<Component { ...pageProps } />
	</Provider>
);

export default Entry;
