import { FC } from 'react';
import Head from 'next/head';

import Header from '../Header';
import Guesses from '../Guesses';
import Controls from '../Controls';
import Line from '../Line';

import styles from './Game.module.scss';

interface Props {
	showCursor: boolean,
}

const Game: FC<Props> = ({ showCursor }) => {
	const mainClassNames = `
		${ styles.main }
		${ !showCursor ? styles.noCursor : '' }
		site-width
	`;

	return (
		<main className={ mainClassNames }>
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