import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { toggleAnswers } from '../../../lib/slices/wordwheel/reducer';

const ShowAnswers: FC = () => {

	const dispatch = useDispatch();

	const handleShowAnswers = useCallback(() => {
		dispatch(toggleAnswers());
	}, [dispatch]);

	return (
		<Button
			handleClick={ handleShowAnswers }
			instructions='Cmd + K'
			title='Answers'
		/>
	);
};

export default ShowAnswers;