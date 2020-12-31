import { FC } from 'react';

import SightReading from './SightReading';

import { useRandomBars } from '../../lib/hooks';

const ConnectedSightReading: FC = () => {
	const { bars, generateBars } = useRandomBars({
		timesignature: [4, 4],
	});

	return (
		<SightReading bars={ bars } generateBars={ generateBars } />
	);
};

export default ConnectedSightReading;