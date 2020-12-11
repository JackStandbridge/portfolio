import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { undo } from '../../../lib/slices/wordwheel/reducer';

const Undo: FC = () => {
	const dispatch = useDispatch();

	const handleUndo = () => {
		dispatch(undo());
	};

	const title = {
		start: '',
		keyLetter: 'U',
		end: 'ndo',
	};

	return (
		<Button
			handleClick={ handleUndo }
			instructions={ `Alt + ${ title.keyLetter.toUpperCase() }` }
			title={ title }
		/>
	);
};

export default Undo;