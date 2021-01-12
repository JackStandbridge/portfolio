import { FC } from 'react';

import styles from './Dot.module.scss';

interface Props {
	x: number,
	y: number,
};

const Dot: FC<Props> = ({ x, y }) => {
	const offset = 12;

	return (
		<circle
			cx={ x + offset }
			cy={ y }
			r={ 2 }
			className={ styles.dot }
		/>
	);
};

export default Dot;