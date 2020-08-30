import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Game from './Game';

import { requestNewGame } from '../../../lib/slices/wordwheel/async';
import { userTyped } from '../../../lib/slices/wordwheel/reducer';

const GameContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestNewGame());
	}, [dispatch]);

	useEffect(() => {

		const keyDownListener = e => {
			if (e.key.match(/^[a-zA-Z]$/)) {
				document.activeElement.blur();
			}

			if (!e.shiftKey && !e.metaKey && !e.altKey) {
				dispatch(userTyped(e.key));
			}
		};

		document.addEventListener('keydown', keyDownListener);

		return () => {
			document.removeEventListener('keydown', keyDownListener);
		}
	}, [dispatch]);

	return (
		<Game />
	);
};

export default GameContainer;