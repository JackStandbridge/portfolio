import { FC, MouseEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Range from './Range';

import { rangeSelector } from '../../../../lib/slices/sightreading/selectors';
import { updateRange } from '../../../../lib/slices/sightreading/reducer';

const ConnectedRange: FC = () => {
	const dispatch = useDispatch();

	const [bottom, top] = useSelector(rangeSelector);

	const handleIncrementTop: MouseEventHandler = () => {
		dispatch(updateRange({
			bound: 'top',
			increase: 1
		}));
	};

	const handleIncrementBottom: MouseEventHandler = () => {
		dispatch(updateRange({
			bound: 'bottom',
			increase: 1
		}));
	};

	const handleDecrementTop: MouseEventHandler = () => {
		dispatch(updateRange({
			bound: 'top',
			increase: -1
		}));
	};

	const handleDecrementBottom: MouseEventHandler = () => {
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