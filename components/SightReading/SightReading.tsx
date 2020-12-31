import { FC } from 'react';
import Head from 'next/head';
import Controls from './Controls';
import Bar from './Bar';
import Durations from './Controls/Durations';
import Interval from './Controls/Interval';
import Range from './Controls/Range';

import styles from './SightReading.module.scss';
import { Bar as iBar } from '../../lib/hooks/useRandomBars';

interface Props {
	bars: iBar[],
	generateBars: () => void,
};

const SightReading: FC<Props> = ({ bars, generateBars }) => {
	return (
		<>
			<Head>
				<title>JS | Sight Reading</title>
			</Head>
			<main className='site-width'>
				<Controls>
					<Durations />
					<Interval />
					<Range />
					<button onClick={ generateBars }>Refresh</button>
				</Controls>
				<div className={ styles.container }>
					{ bars.map((bar, i) => {
						return (
							<Bar
								barWidth={ 300 }
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