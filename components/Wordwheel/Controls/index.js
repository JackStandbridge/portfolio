import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Controls from './Controls';

import { toggleAnswers } from '../../../lib/slices/wordwheel/reducer';
import { requestNewGame } from '../../../lib/slices/wordwheel/async';

const ControlsContainer = () => {

	const dispatch = useDispatch();

	const handleShowAnswers = useCallback(e => {
		e.currentTarget.blur?.();
		dispatch(toggleAnswers());
	}, [dispatch]);

	const handleNewGame = useCallback(e => {
		e.currentTarget.blur?.();
		dispatch(requestNewGame());
	}, [dispatch]);

	useEffect(() => {
		const controlsListener = e => {
			if (e.key === 'a' && e.metaKey && e.shiftKey) {
				handleShowAnswers(e);
			} else if (e.key === 's' && e.metaKey && e.shiftKey) {
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