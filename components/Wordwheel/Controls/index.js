import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Controls from './Controls';

import { toggleAnswers } from '../../../lib/slices/wordwheel/reducer';
import { requestNewGame } from '../../../lib/slices/wordwheel/async';

const ControlsContainer = () => {

	const dispatch = useDispatch();

	const handleShowAnswers = useCallback(() => {
		dispatch(toggleAnswers());
	}, [dispatch]);

	const handleNewGame = useCallback(() => {
		dispatch(requestNewGame());
	}, [dispatch]);

	useEffect(() => {
		const controlsListener = e => {
			if (e.key === 'k' && e.metaKey) {
				handleShowAnswers(e);
			} else if (e.key === 'b' && e.metaKey) {
				handleNewGame(e);
			}
		};

		document.addEventListener('keydown', controlsListener);

		return () => {
			document.removeEventListener('keydown', controlsListener);
		}
	}, [handleNewGame, handleShowAnswers]);

	return (
		<Controls
			handleShowAnswers={ handleShowAnswers }
			handleNewGame={ handleNewGame }
		/>
	);
};

export default ControlsContainer;