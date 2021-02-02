import { FC } from 'react';
import Head from 'next/head';
import Controls from './Controls';
import Bar from './Bar';
import Durations from './Controls/Durations';
import Interval from './Controls/Interval';
import Refresh from './Controls/Refresh';
import Range from './Controls/Range';
import ToggleNoteNames from './Controls/ToggleNoteNames';

import styles from './SightReading.module.scss';
import { Bar as iBar } from '../../lib/hooks/useRandomBars';

interface Props {
	bars: iBar[],
	generateBars: () => void,
	containerRef: React.Ref<HTMLDivElement>,
	barWidth: number,
};

const SightReading: FC<Props> = ({ containerRef, bars, generateBars, barWidth }) => {
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
					<ToggleNoteNames />
					<Refresh generateBars={ generateBars } />
				</Controls>

				<div ref={ containerRef } className={ styles.container }>
					{ bars.map((bar, i) => (
						<Bar
							barWidth={ barWidth }
							barNumber={ i }
							key={ i }
							voices={ bar.voices }
						/>
					)) }
				</div>
			</main>
		</>
	);
};

export default SightReading;