import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { undo } from '../../../lib/slices/wordwheel/reducer';

const Undo: FC = () => {
	const dispatch = useDispatch();

	const handleUndo = () => {
		dispatch(undo());
	};

	return (
		<Button
			handleClick={ handleUndo }
			instructions='Cmd + Z'
			title='Undo'
		/>
	);
};

export default Undo;