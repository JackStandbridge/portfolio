import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Controls from './Controls';

import { setColour } from '../../../lib/slices/colourflood/reducer';
import { difficultySelector, colourSelector } from '../../../lib/slices/colourflood/selectors';

const ControlsContainer: FC = () => {
	const dispatch = useDispatch();

	const handleClick = (num: number): void => {
		dispatch(setColour(num));
	}

	const difficulty = useSelector(difficultySelector);
	const colours = Array.from(Array(difficulty).keys());
	const colour = useSelector(colourSelector);

	return (
		<Controls
			handleClick={ handleClick }
			colours={ colours }
			userColour={ colour }
		/>
	);
};

export default ControlsContainer;