import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Game from './Game';

import { newGame, userTyped } from '../../../lib/slices/wordwheel/reducer';

const GameContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newGame());
	}, [dispatch]);

	useEffect(() => {

		const keyDownListener = e => {
			document.activeElement.blur();
			dispatch(userTyped(e.key));
		};

		window.addEventListener('keydown', keyDownListener);

		return () => {
			window.removeEventListener('keydown', keyDownListener);
		}
	});

	return (
		<Game />
	);
};

export default GameContainer;