import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { requestNewGame } from '../../../lib/slices/wordwheel/async';

const NewGame: FC = () => {
	const dispatch = useDispatch();
	const handleNewGame = useCallback(() => {
		dispatch(requestNewGame());
	}, [dispatch]);

	return (
		<Button
			handleClick={ handleNewGame }
			instructions='Cmd + B'
			title='New Game'
		/>
	);
};

export default NewGame;