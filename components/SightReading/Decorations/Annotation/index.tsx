import { FC, ReactNode } from 'react';

import styles from './Annotation.module.scss';

interface Props {
	show: boolean;
	coords: {
		x: number;
		y: number;
	};
	children: ReactNode;
}

const Annotation = ({ show, coords, children }: Props) => {
	return (
		<>
			<rect
				{...coords}
				className={
					(show ? styles.rectShown : styles.rectHidden) +
					' sightreading__note__annotation'
				}
			/>
			<text
				className={
					(show ? styles.textShown : styles.textHidden) +
					' sightreading__note__annotation'
				}
				{...coords}
			>
				{children}
			</text>
		</>
	);
};

export default Annotation;
