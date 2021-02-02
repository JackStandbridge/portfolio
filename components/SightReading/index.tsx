import { FC, useRef, useEffect, useState } from 'react';

import SightReading from './SightReading';

import { useRandomBars } from '../../lib/hooks';

const ConnectedSightReading: FC = () => {
	const { bars, generateBars } = useRandomBars({
		timesignature: [4, 4],
	});

	const [barWidth, setBarWidth] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const calculateBarWidth = () => {
		// tweak these values for different bar scaling at different breakpoints
		let scale = 1;

		if (window.innerWidth >= 1100) {
			scale = scale * 3.2;
		} else if (window.innerWidth >= 768) {
			scale = scale * 2.4;
		} else if (window.innerWidth >= 500) {
			scale = scale * 1.6;
		} else {
			scale = scale * 0.8;
		}

		setBarWidth((ref.current?.clientWidth ?? 0) / scale);
	};

	useEffect(() => {
		window.addEventListener('resize', calculateBarWidth);

		calculateBarWidth();

		return () => {
			window.removeEventListener('resize', calculateBarWidth);
		};
	}, []);

	return (
		<SightReading
			barWidth={ barWidth }
			bars={ bars }
			generateBars={ generateBars }
			containerRef={ ref }
		/>
	);
};

export default ConnectedSightReading;