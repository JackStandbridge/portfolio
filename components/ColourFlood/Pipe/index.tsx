import { FC } from 'react';
import { useSelector } from 'react-redux';

import Pipe from './Pipe';

import { colourSelector, difficultySelector } from '../../../lib/slices/colourflood/selectors';

const PipeContainer: FC = () => {
	const colour = useSelector(colourSelector);
	const difficulty = useSelector(difficultySelector);

	return (
		<Pipe
		colour={ colour }
		difficulty={ difficulty }
		 />
	);
};

export default PipeContainer;