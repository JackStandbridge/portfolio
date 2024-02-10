import { useEffect, useState } from 'react';
import styles from './scrollSpeed.module.scss';

export type ScrollSpeedProps = {};

export const ScrollSpeed = ({}: ScrollSpeedProps): JSX.Element => {
	const [scrollSpeed, setScrollSpeed] = useState<number | null>(null);

	const scrollPlus = () => {
		if (scrollSpeed === null) {
			setScrollSpeed(1);
		} else {
			setScrollSpeed(scrollSpeed / 1.5);
		}
	};

	const scrollMinus = () => {
		console.log(scrollSpeed);
		if (scrollSpeed === null) {
			return;
		}

		if (scrollSpeed > 0.75) {
			setScrollSpeed(null);
		} else {
			setScrollSpeed(scrollSpeed * 1.5);
		}
	};

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | null = null;

		if (scrollSpeed !== null) {
			interval = setInterval(() => {
				window.scrollBy({ top: 1 });
			}, scrollSpeed * 1000);
		} else if (interval) {
			clearInterval(interval);
		}

		return () => {
			if (interval !== null) {
				clearInterval(interval);
			}
		};
	}, [scrollSpeed]);

	return (
		<>
			<button className={styles.plus} onClick={scrollPlus}>
				+
			</button>

			<button className={styles.minus} onClick={scrollMinus}>
				-
			</button>
		</>
	);
};
