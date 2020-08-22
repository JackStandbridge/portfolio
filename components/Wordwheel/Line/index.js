import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterIdsSelector } from '../../../lib/slices/wordwheel/reducer';

const LineContainer = () => {

	const letterIds = useSelector(letterIdsSelector, shallowEqual);

	const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 800);

	useEffect(() => {
		const resizeListener = () => {
			setIsNarrowScreen(isNarrowScreen => {
				if (isNarrowScreen && window.innerWidth >= 800) {
					return false;
				} else if (!isNarrowScreen && window.innerWidth < 800) {
					return true;
				} else {
					return isNarrowScreen;
				}
			})
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [setIsNarrowScreen]);

	return (
		<Line
			letterIds={ letterIds }
			isNarrowScreen={ isNarrowScreen }
		/>
	);
};

export default LineContainer;