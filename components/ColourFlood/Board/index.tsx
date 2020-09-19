import { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Board from './Board';

import { boardSelector } from '../../../lib/slices/colourflood/selectors';
import { newBoard } from '../../../lib/slices/colourflood/reducer';

const BoardContainer: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newBoard());
	}, [dispatch]);

	const board = useSelector(boardSelector);

	console.log(board);

	return (
		<Board />
	);
};

export default BoardContainer;