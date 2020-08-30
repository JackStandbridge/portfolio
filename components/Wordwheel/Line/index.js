import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterIdsSelector } from '../../../lib/slices/wordwheel/selectors';
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

	const handleKeyDown = e => {
		if (e.key !== 'Tab') {
			return;
		}

		const newIndex = clamp(0, 8, focused + (e.shiftKey ? -1 : 1));


		if (focused !== newIndex) {
			e.preventDefault();
		}

		setFocused(newIndex);
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