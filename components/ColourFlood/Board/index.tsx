import { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './Board';

import { boardSelector, difficultySelector } from '../../../lib/slices/colourflood/selectors';
import { newBoard } from '../../../lib/slices/colourflood/reducer';
import { generateBoard } from '../../../lib/utils';

const ConnectedBoard: FC = () => {
	const board = useSelector(boardSelector);
	const difficulty = useSelector(difficultySelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newBoard(generateBoard(difficulty)));
	}, [dispatch, difficulty]);

	return (
		<Board board={ board } />
	);
};

export default ConnectedBoard;