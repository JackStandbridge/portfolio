import { FC } from 'react';
import Head from 'next/head';
import Controls from './Controls';
import Bar from './Bar';

import styles from './SightReading.module.scss';
import { iBar } from '../../lib/hooks/useRandomBars';

interface Props {
	bars: iBar[]
};

const SightReading: FC<Props> = ({ bars }) => {
	return (
		<>
			<Head>
				<title>JS | Sight Reading</title>
			</Head>
			<main className='site-width'>
				<Controls />
				<div className={ styles.container }>
					{ bars.map((bar, i) => {
						return (
							<Bar
								barNumber={ i }
								key={ i }
								voices={ bar.voices }
							/>
						)
					}) }
				</div>
			</main>
		</>
	);
};

export default SightReading;