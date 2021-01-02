import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';

import store from '../lib/store';

import '../styles/global.scss';

const Entry = ({ Component, pageProps }: AppProps) => {

	const [, setScrollPos] = useState<number[]>([]);

	useEffect(() => {
		// scroll position restoration necessary because
		// next doesn't restore scroll position on clicking
		// browser's back button.

		Router.events.on("routeChangeStart", target => {
			if (target !== '/') {
				setScrollPos(scrollPos => [...scrollPos, window.pageYOffset || 0]);
			}
		});

		Router.beforePopState(() => {
			setTimeout(() => {

				setScrollPos(scrollPos => {
					const newScrollPos = [...scrollPos];
					const y = newScrollPos.pop() as number;
					window.scrollTo(0, y);

					return newScrollPos;
				});
			}, 100)

			return true;
		});

	}, [setScrollPos]);

	return (
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
	)
};

export default Entry;
