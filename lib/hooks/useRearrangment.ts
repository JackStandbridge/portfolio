import { useState, useDebugValue } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { baseOrderSelector } from '../slices/wordwheel/selectors';
import { moveLetter } from '../slices/wordwheel/reducer';
import { clamp } from '../utils';

const useRearrangment = (): [number, (e: KeyboardEvent) => void] => {
	const [prevPosition, setPrevPosition] = useState(0);
	const [focused, setFocused] = useState(0);

	const baseOrder = useSelector(baseOrderSelector);

	const movements = {
		'left': -1,
		'right': 1
	};

	const handleSelect = (e: KeyboardEvent, direction: 'left'|'right') => {
		const position = baseOrder.indexOf(focused);

		if (position !== -1) {
			const newIndex = clamp(0, 8, position + movements[direction]);

			if (focused !== baseOrder[newIndex]) {
				e.preventDefault();
			}

			setFocused(baseOrder[newIndex]);
			setPrevPosition(baseOrder[newIndex]);

		} else {
			setFocused(prevPosition);
		}
	};

	const dispatch = useDispatch();

	const handleMove = (direction: 'left'|'right') => {
		const id = focused;

		const currentPosition = baseOrder.indexOf(id);

		if (currentPosition !== -1) {
			const toPosition = clamp(0, 8, currentPosition + movements[direction]);

			dispatch(moveLetter({ id, toPosition }));

		} else {
			setFocused(prevPosition);
		}

	}

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key.match(/Arrow(Left|Right)/)) {
			const direction = e.key.replace(/Arrow(\w)/, '$1').toLowerCase() as 'left'|'right';
			if (e.shiftKey || e.altKey) {
				handleMove(direction);
			} else {
				handleSelect(e, direction);
			}
		}
	};

	useDebugValue(baseOrder);

	return [
		focused,
		handleKeyDown,
	];
};

export default useRearrangment;