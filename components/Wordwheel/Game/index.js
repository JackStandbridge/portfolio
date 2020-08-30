import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Game from './Game';

import { getInitialGame } from '../../../lib/slices/wordwheel/async';
import { userTyped } from '../../../lib/slices/wordwheel/reducer';

const GameContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInitialGame());
	}, [dispatch]);

	useEffect(() => {

		const keyDownListener = e => {
			const userIsTyping = e.key.match(/^[a-zA-Z]$/);

			const buttonIsFocused = document.activeElement.matches('button');

			const movingLetters = e.key.match(/^Arrow(Left|Right)$/);

			if (userIsTyping || (movingLetters && buttonIsFocused)) {
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