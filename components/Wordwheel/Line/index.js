import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterIdsSelector } from '../../../lib/slices/wordwheel/reducer';

const LineContainer = () => {

	const letterIds = useSelector(letterIdsSelector, shallowEqual);

	const breakPoint = 675;

	const [isWheelLayout, setIsWheelLayout] = useState(window.innerWidth < breakPoint);

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

			const fractionOfScreen = (window.innerWidth / 9 - (spacing * 16 + spacing)) / 16;
			const size = Math.min(3, fractionOfScreen);
			setDimensions(size);
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [setIsWheelLayout, setDimensions]);

	return (
		<Line
			scale={ scale }
			spacing={ spacing }
			dimensions={ dimensions }
			letterIds={ letterIds }
			isWheelLayout={ isWheelLayout }
		/>
	);
};

export default LineContainer;