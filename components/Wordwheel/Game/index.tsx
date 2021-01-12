import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Game from './Game';

import { getInitialGame } from '../../../lib/slices/wordwheel/async';
import { userTyped } from '../../../lib/slices/wordwheel/reducer';
import { playingSelector } from '../../../lib/slices/wordwheel/selectors';

const ConnectedGame = () => {
	const dispatch = useDispatch();

	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		dispatch(getInitialGame());
	}, [dispatch]);

	const playing = useSelector(playingSelector);

	useEffect((): () => void => {

		const keyDownListener = (e: KeyboardEvent): void => {
			const userIsTyping = e.key.match(/^[a-zA-Z]$/);
			const buttonIsFocused = document.activeElement?.matches('button');
			const movingLetters = e.key.match(/^Arrow(Left|Right)$/);

			if (userIsTyping || (movingLetters && buttonIsFocused)) {
				(document.activeElement as HTMLElement).blur();
				setShowCursor(false);
			}

			if (!e.shiftKey && !e.metaKey && !e.altKey) {
				dispatch(userTyped(e.key));
			}
		};

		if (playing) {
			document.addEventListener('keydown', keyDownListener);
		}

		return (): void => {
			document.removeEventListener('keydown', keyDownListener);
		}
	}, [dispatch, playing, setShowCursor]);

	useEffect(() => {
		const mouseMoveListener = () => {
			setShowCursor(true);
		};
		document.addEventListener('mousemove', mouseMoveListener);
	}, [setShowCursor]);

	return <Game showCursor={ showCursor } />;
};

export default ConnectedGame;