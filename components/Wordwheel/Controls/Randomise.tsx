import { FC } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { resequenceLetters } from '../../../lib/slices/wordwheel/reducer';

const Randomise: FC = () => {
	const dispatch = useDispatch();

	const handleRandomise = () => {
		dispatch(resequenceLetters(
			[0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() < 0.5 ? 1 : -1)
		));
	};

	return (
		<Button
			handleClick={ handleRandomise }
			instructions='Cmd + U'
			title='Shuffle'
		/>
	);
};

export default Randomise;