import { FC } from 'react';
import { useSelector } from 'react-redux';

import Pipe from './Pipe';

import { colourSelector, difficultySelector } from '../../../../lib/slices/colourflood/selectors';

const ConnectedPipe: FC = () => {
	const colour = useSelector(colourSelector);
	const difficulty = useSelector(difficultySelector);

	const sections = [1, 2, 3];
	const cfDimensions = 6.5;
	const gap = cfDimensions / 6;
	const gridSize = 10;
	const width = (gridSize * cfDimensions) + (gap * (gridSize - 1));
	const padding = cfDimensions * 0.85;
	const controlWidth = cfDimensions / 0.75;
	const bounds = width - controlWidth;
	const pipeThickness = cfDimensions / 4.4;

	const pipeLeft = padding + (controlWidth / 2) + (bounds / (difficulty - 1)) * colour;
	const pipeWidth = pipeLeft - pipeThickness;

	return (
		<Pipe
			colour={ colour }
			pipeLeft={ pipeLeft }
			pipeWidth={ pipeWidth }
			sections={ sections }
		/>
	);
};

export default ConnectedPipe;