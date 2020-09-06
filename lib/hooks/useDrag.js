import { useDebugValue, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { moveLetter } from '../slices/wordwheel/reducer';
import { clamp } from '../utils';

const useDrag = (spacing, id, startingPosition) => {
	const dispatch = useDispatch();

	const [position, setPosition] = useState(0);
	const positionRef = useRef(0);
	const [movingLetter, setMovingLetter] = useState(false);

	useEffect(() => {
		const diff = clamp(-1, 1, position - positionRef.current);
		const toPosition = clamp(0, 8, startingPosition + diff);

		if (toPosition !== startingPosition) {
			dispatch(moveLetter({ id, toPosition }));
			setMovingLetter(true);
		}

		positionRef.current = position;
	}, [position]);

	const [originalX, setOriginalX] = useState(null);

	const handleDragStart = e => {
		const target = e.currentTarget;
		setOriginalX(target.style.left);

		const startingPlace = e.clientX;
		const reorderThreshold = (target.offsetWidth + spacing) / 2;

		target.style.transition = '0s';
		target.style.zIndex = '10';
		target.style.transform = 'translateY(-15px) rotate(2deg)';

		const moveListener = e => {
			const distance = e.clientX - startingPlace;
			target.style.transform = `translateX(${ distance }px) translateY(-15px) rotate(2deg)`;

			const offsetByHalves = Math.trunc(distance / reorderThreshold);
			const newPosition = Math.sign(offsetByHalves) * Math.ceil(Math.abs(offsetByHalves / 2));

			setPosition(newPosition);
		};

		const cleanUp = () => {
			document.removeEventListener('mousemove', moveListener);
			document.removeEventListener('mouseup', cleanUp);
			target.style.zIndex = '';
			target.style.transform = '';

			setOriginalX(null);
			setPosition(0);
			positionRef.current = 0;
			target.style.transition = '0.2s';

			requestAnimationFrame(() => {
				// need to wait for next tick in order
				// for mouse release to be processed
				setMovingLetter(false);
			});
		};

		moveListener(e);

		document.addEventListener('mousemove', moveListener);
		document.addEventListener('mouseup', cleanUp);
	};

	useDebugValue({
		originalX,
		movingLetter,
	});

	return [handleDragStart, originalX, movingLetter];
};

export default useDrag;