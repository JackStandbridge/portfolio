import { useEffect } from 'react';
import { newGame } from '../../../lib/slices/wordwheel/reducer'
import { useDispatch } from 'react-redux';
import Game from './Game';

const GameContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newGame());
	}, [dispatch]);

	return (
		<Game />
	);
};

export default GameContainer;