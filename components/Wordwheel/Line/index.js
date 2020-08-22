import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import Line from './Line';

import { letterIdsSelector } from '../../../lib/slices/wordwheel/reducer';

const LineContainer = () => {

	const letterIds = useSelector(letterIdsSelector, shallowEqual);

	const [mobileView, setMobileView] = useState(window.innerWidth < 800);

	useEffect(() => {
		const resizeListener = () => {
			if (mobileView && window.innerWidth >= 800) {
				setMobileView(false);
			} else if (!mobileView && window.innerWidth < 800) {
				setMobileView(true);
			}
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [setMobileView]);

	return (
		<Line
			letterIds={ letterIds }
			mobileView={ mobileView }
		/>
	);
};

export default LineContainer;