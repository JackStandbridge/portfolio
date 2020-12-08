import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { requestNewGame } from '../../../lib/slices/wordwheel/async';

const NewGame: FC = () => {
	const dispatch = useDispatch();

	const handleNewGame = useCallback(() => {
		dispatch(requestNewGame());
	}, [dispatch]);

	useEffect(() => {
		const keyListener = (e: KeyboardEvent) => {
			if (e.altKey && e.key === 'b') {
				console.log('go');
			}
		};

		document.addEventListener('keydown', keyListener);
	}, []);

	return (
		<Button
			handleClick={ handleNewGame }
			instructions='Cmd + B'
			title='New Game'
		/>
	);
};

export default NewGame;