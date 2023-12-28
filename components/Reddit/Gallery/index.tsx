import { FC, ReactNode, useState } from 'react';

import { clamp } from '../../../lib/utils';

import styles from './Gallery.module.scss';

interface Props {
	shown: boolean;
	children: ReactNode;
}

const Gallery = ({ children, shown }: Props) => {
	const [current, setCurrent] = useState(0);

	const length = Array.isArray(children) ? children.length : 1;

	const handleIncrement = () => {
		setCurrent(clamp(0, length - 1, current + 1));
	};

	const handleDecrement = () => {
		setCurrent(clamp(0, length - 1, current - 1));
	};

	return (
		<div className={styles.gallery}>
			<div className={styles.viewport}>
				<div
					className={styles.contents}
					style={{
						transform: `translateX(calc(-${current * 100}% - ${
							current * 0.5
						}rem))`,
					}}
				>
					{children}
				</div>
			</div>

			{shown && Array.isArray(children) && children.length > 1 && (
				<footer className={styles.buttons}>
					<button className={styles.button} onClick={handleDecrement} />
					<button className={styles.button} onClick={handleIncrement} />
				</footer>
			)}
		</div>
	);
};

export default Gallery;
