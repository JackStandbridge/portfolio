import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterSelector, toggleLetter } from '../../../lib/slices/wordwheel/reducer';

const LineContainer = () => {
	const dispatch = useDispatch();

	const letters = useSelector(letterSelector, shallowEqual);

	const handleClick = id => {
		dispatch(toggleLetter(id));
	};

	return (
		<Line
			letters={ letters }
			handleClick={ handleClick }
		/>
	);
};

export default LineContainer;