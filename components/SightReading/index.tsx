import { FC } from 'react';
import Bar from './Bar';

import styles from './SightReading.module.scss';

const SightReading: FC = () => {
	return (
		<svg className={ styles.svg } viewBox='0 0 1000 500'>
			<Bar />
		</svg>
	);
};

export default SightReading;