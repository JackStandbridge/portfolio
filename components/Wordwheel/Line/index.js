import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterIdsSelector } from '../../../lib/slices/wordwheel/reducer';

const LineContainer = () => {

	const letterIds = useSelector(letterIdsSelector, shallowEqual);

	const [isWheelLayout, setIsWheelLayout] = useState(window.innerWidth < 800);

	useEffect(() => {
		const resizeListener = () => {
			setIsWheelLayout(isWheelLayout => {
				if (isWheelLayout && window.innerWidth >= 800) {
					return false;
				} else if (!isWheelLayout && window.innerWidth < 800) {
					return true;
				} else {
					return isWheelLayout;
				}
			})
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [setIsWheelLayout]);

	return (
		<Line
			letterIds={ letterIds }
			isWheelLayout={ isWheelLayout }
		/>
	);
};

export default LineContainer;