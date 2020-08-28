import { useDispatch } from 'react-redux';

import Controls from './Controls';

import { toggleAnswers } from '../../../lib/slices/wordwheel/reducer';
import { requestNewGame } from '../../../lib/slices/wordwheel/async';

const ControlsContainer = () => {

	const dispatch = useDispatch();

	const handleShowAnswers = () => {
		dispatch(toggleAnswers());
	};

	const handleNewGame = () => {
		dispatch(requestNewGame());
	};

	return (
		<Controls
			handleShowAnswers={ handleShowAnswers }
			handleNewGame={ handleNewGame }
		/>
	);
};

export default ControlsContainer;