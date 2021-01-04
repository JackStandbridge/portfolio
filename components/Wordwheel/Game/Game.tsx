import { FunctionComponent } from 'react';
import Head from 'next/head';

import Header from '../Header';
import Guesses from '../Guesses';
import Controls from '../Controls';
import Line from '../Line';

import styles from './Game.module.scss';

const Game: FunctionComponent = () => {
	return (
		<main className={ styles.main + ' site-width' }>
			<Head>
				<title>JS | Wordwheel</title>
			</Head>
			<Header />
			<Guesses />
			<Controls />
			<Line />
		</main>
	);
};

export default Game;