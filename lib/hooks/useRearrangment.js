import { useState, useDebugValue } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { baseOrderSelector } from '../slices/wordwheel/selectors';
import { moveLetter } from '../slices/wordwheel/reducer';
import { clamp } from '../utils';

const useRearrangment = () => {
	const [focused, setFocused] = useState(0);

	const baseOrder = useSelector(baseOrderSelector);

	const movements = {
		'ArrowLeft': -1,
		'ArrowRight': 1
	};

	const handleSelect = e => {

		const position = baseOrder.indexOf(focused);

		const newIndex = clamp(0, 8, position + movements[e.key]);

		if (focused !== baseOrder[newIndex]) {
			e.preventDefault();
		}

		setFocused(baseOrder[newIndex]);
	};

	const dispatch = useDispatch();

	const handleMove = e => {
		const id = focused;
		const currentPosition = baseOrder.indexOf(id);
		const toPosition = clamp(0, 8, currentPosition + movements[e.key]);

		dispatch(moveLetter({ id, toPosition }));
	}

	const handleKeyDown = e => {
		if (!e.key.match(/Arrow/)) {
			return;
		}

		if (e.shiftKey) {
			handleMove(e);
		} else {
			handleSelect(e);
		}
	};

	useDebugValue(baseOrder);

	return [focused, handleKeyDown];
};

export default useRearrangment;