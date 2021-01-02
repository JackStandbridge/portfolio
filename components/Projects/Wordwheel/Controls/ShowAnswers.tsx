import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { toggleAnswers } from '../../../../lib/slices/wordwheel/reducer';

const ShowAnswers: FC = () => {

	const dispatch = useDispatch();

	const handleShowAnswers = useCallback(() => {
		dispatch(toggleAnswers());
	}, [dispatch]);

	const title = {
		start: '',
		keyLetter: 'A',
		end: 'nswers',
	};

	return (
		<Button
			handleClick={ handleShowAnswers }
			instructions={ `Alt + ${ title.keyLetter.toUpperCase() }` }
			title={ title }
		/>
	);
};

export default ShowAnswers;