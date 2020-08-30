import { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterIdsSelector, baseOrderSelector } from '../../../lib/slices/wordwheel/selectors';
import { moveLetter } from '../../../lib/slices/wordwheel/reducer';
import { clamp } from '../../../lib/utils';

const LineContainer = () => {

	const letterIds = useSelector(letterIdsSelector, shallowEqual);

	const breakPoint = 550;

	const [isWheelLayout, setIsWheelLayout] = useState(false);

	const spacing = 1.5;
	const [dimensions, setDimensions] = useState(3);
	const scale = dimensions + spacing;

	useEffect(() => {
		const resizeListener = () => {

			setIsWheelLayout(isWheelLayout => {
				if (isWheelLayout && window.innerWidth >= breakPoint) {
					return false;
				} else if (!isWheelLayout && window.innerWidth < breakPoint) {
					return true;
				} else {
					return isWheelLayout;
				}
			});

			const fractionOfScreen = (window.innerWidth - 216) / 144;
			const size = Math.min(3, fractionOfScreen);
			setDimensions(size);
		};

		window.addEventListener('resize', resizeListener);

		resizeListener();

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [setIsWheelLayout, setDimensions]);

	const [focused, setFocused] = useState(0);

	const handleTab = e => {
		const newIndex = clamp(0, 8, focused + (e.shiftKey ? -1 : 1));

		if (focused !== newIndex) {
			e.preventDefault();
		}

		setFocused(newIndex);
	};

	const dispatch = useDispatch();

	const baseOrder = useSelector(baseOrderSelector);

	const handleMove = e => {
		const id = focused;
		const currentPosition = baseOrder.indexOf(id);
		const toPosition = clamp(0, 8, currentPosition + (e.key === 'ArrowLeft' ? -1 : 1));

		dispatch(moveLetter({ id, toPosition }))
	}

	const handleKeyDown = e => {
		switch (e.key) {
			case 'Tab':
				handleTab(e);
				break;

			case 'ArrowLeft':
			case 'ArrowRight':
				handleMove(e);
				break;

			default:
				break;
		}
	};

	return (
		<Line
			focused={ focused }
			scale={ scale }
			spacing={ spacing }
			dimensions={ dimensions }
			letterIds={ letterIds }
			isWheelLayout={ isWheelLayout }
			handleKeyDown={ handleKeyDown }
		/>
	);
};

export default LineContainer;