import { useRef, useState, useEffect, useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Controls from './Controls';

import {
	toggleAnswers,
	stopPlaying,
	startPlaying,
	defineWord,
	submitGuess,
	resequenceLetters,
	undo,
} from '../../../lib/slices/wordwheel/reducer';
import { requestNewGame } from '../../../lib/slices/wordwheel/async';
import { playingSelector } from '../../../lib/slices/wordwheel/selectors';

const ControlsContainer: FC = () => {

	const dispatch = useDispatch();

	const handleShowAnswers = useCallback(() => {
		dispatch(toggleAnswers());
	}, [dispatch]);

	const handleNewGame = useCallback(() => {
		dispatch(requestNewGame());
	}, [dispatch]);

	const handleRandomise = () => {
		dispatch(resequenceLetters(
			[0, 1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() < 0.5 ? 1 : -1)
		));
	};

	const handleUndo = () => {
		dispatch(undo());
	};

	const [modalIsShown, setModalIsShown] = useState(false);

	const handleDefineWord = () => {
		if (modalIsShown) {
			setModalIsShown(false);
			dispatch(startPlaying());

		} else {
			setModalIsShown(true);
			dispatch(stopPlaying());
		}
	};

	useEffect(() => {
		const controlsListener = (e: KeyboardEvent) => {
			if (!e.metaKey) {
				return;
			}

			switch (e.key) {
				case 'k':
					handleShowAnswers();
					break;
				case 'b':
					handleNewGame();
					break;
				case 'g':
					e.preventDefault();
					handleDefineWord();
					break;
				case 'u':
					handleRandomise();
					break;
				case 'z':
					handleUndo();
					break;
				default: return;
			}
		};

		document.addEventListener('keydown', controlsListener);

		return () => {
			document.removeEventListener('keydown', controlsListener);
		}
	}, [
		handleNewGame,
		handleShowAnswers,
		handleDefineWord,
		handleRandomise,
		handleUndo,
	]);

	const modalRef = useRef<HTMLInputElement>(null);

	const playing = useSelector(playingSelector);

	useEffect(() => {
		if (modalIsShown && modalRef.current) {
			modalRef.current.focus();
		}
	}, [modalIsShown, playing]);

	const [input, setInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>|React.KeyboardEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (value.match(/[^a-z]/gi)) {
			return;
		}

		if (value.length <= 9) {
			setInput(value);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (input.length === 9) {
			dispatch(defineWord(input));
			setModalIsShown(false);
			setInput('');
		}
	};

	const handleClose = (e: React.MouseEvent) => {
		if (e.currentTarget === e.target) {
			setModalIsShown(false);
		}
	};

	const handleGuess = () => {
		dispatch(submitGuess());
	};

	return (
		<Controls
			handleDefineWord={ handleDefineWord }
			handleShowAnswers={ handleShowAnswers }
			handleNewGame={ handleNewGame }
			modalIsShown={ modalIsShown }
			handleChange={ handleChange }
			input={ input }
			handleSubmit={ handleSubmit }
			modalRef={ modalRef }
			handleClose={ handleClose }
			handleGuess={ handleGuess }
			handleRandomise={ handleRandomise }
			handleUndo={ handleUndo }
		/>
	);
};

export default ControlsContainer;