import { FC, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Define from './Define';

import {
	startPlaying,
	stopPlaying,
	defineWord
} from '../../../../../lib/slices/wordwheel/reducer';
import { playingSelector } from '../../../../../lib/slices/wordwheel/selectors';

const ConnectedDefine: FC = () => {
	const dispatch = useDispatch();

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

	const modalRef = useRef<HTMLInputElement>(null);

	const playing = useSelector(playingSelector);

	useEffect(() => {
		if (modalIsShown && modalRef.current) {
			modalRef.current.focus();
		}
	}, [modalIsShown, playing]);

	const [input, setInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
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

	const handleClose = () => {
		setModalIsShown(false);
		dispatch(startPlaying());
	};

	const buttonTitle = {
		start: '',
		keyLetter: 'D',
		end: 'efine',
	}

	return (
		<Define
			handleClose={ handleClose }
			handleSubmit={ handleSubmit }
			handleChange={ handleChange }
			handleDefineWord={ handleDefineWord }
			input={ input }
			modalRef={ modalRef }
			modalIsShown={ modalIsShown }
			buttonTitle={ buttonTitle }
		/>
	);
};

export default ConnectedDefine;