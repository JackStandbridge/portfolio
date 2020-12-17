import { FC } from 'react';
import Head from 'next/head'

import Bar from './Bar';

import styles from './SightReading.module.scss';
import { useRandomBars } from '../../lib/hooks';

const SightReading: FC = () => {
	const { bars, fetchMoreBars } = useRandomBars([4, 4]);

	return (
		<main className={ styles.container }>
			<Head>
				<title>JS | Sight Reading</title>
			</Head>
			<button onClick={ fetchMoreBars }>More</button>
			{ bars.map((bar, i) => {
				return (
					<Bar
						barNumber={ i }
						key={ i }
						voices={ bar.voices }
					/>
				)
			}) }
		</main>
	);
};

export default SightReading;