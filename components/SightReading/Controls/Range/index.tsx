import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Range from './Range';

import { rangeSelector } from '../../../../lib/slices/sightreading/selectors';
import { updateRange } from '../../../../lib/slices/sightreading/reducer';

const ConnectedRange: FC = () => {
	const dispatch = useDispatch();

	const [bottom, top] = useSelector(rangeSelector);

	const handleIncrementTop = () => {
		dispatch(updateRange({
			bound: 'top',
			increase: 1
		}));
	};

	const handleIncrementBottom = () => {
		dispatch(updateRange({
			bound: 'bottom',
			increase: 1
		}));
	};

	const handleDecrementTop = () => {
		dispatch(updateRange({
			bound: 'top',
			increase: -1
		}));
	};

	const handleDecrementBottom = () => {
		dispatch(updateRange({
			bound: 'bottom',
			increase: -1
		}));
	};


	return (
		<Range
			top={ top }
			bottom={ bottom }
			handleIncrementTop={ handleIncrementTop }
			handleIncrementBottom={ handleIncrementBottom }
			handleDecrementTop={ handleDecrementTop }
			handleDecrementBottom={ handleDecrementBottom }
		/>
	);
};

export default ConnectedRange;