import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { requestNewGame } from '../../../../lib/slices/wordwheel/async';

const NewGame: FC = () => {
	const dispatch = useDispatch();

	const handleNewGame = useCallback(() => {
		dispatch(requestNewGame());
	}, [dispatch]);

	useEffect(() => {
		const keyListener = (e: KeyboardEvent) => {

			if (e.altKey && e.code === 'KeyN') {
				console.log('go');
			}
		};

		document.addEventListener('keydown', keyListener);

		return () => {
			document.removeEventListener('keydown', keyListener);
		};
	}, []);

	const title = {
		start: '',
		keyLetter: 'N',
		end: 'ew Game',
	};

	return (
		<Button
			handleClick={ handleNewGame }
			instructions={ `Alt + ${ title.keyLetter.toUpperCase() }` }
			title={ title }
		/>
	);
};

export default NewGame;