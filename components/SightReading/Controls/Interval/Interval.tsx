import { FC } from 'react';

import styles from './Interval.module.scss';
import controlStyles from '../Controls.module.scss';

interface Props {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	value: number,
}

const Interval: FC<Props> = ({ handleChange, value }) => {
	return (
		<label className={ controlStyles.controlsSection }>
			<p>Max Interval</p>
			<div className={ controlStyles.controlAlignment }>
				<input
					onChange={ handleChange }
					value={ value }
					className={ styles.interval }
					type='number'
				/>&nbsp;step{ value !== 1 && 's' }
			</div>
		</label>
	);
};

export default Interval;