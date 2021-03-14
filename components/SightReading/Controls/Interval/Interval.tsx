import { FC, ChangeEventHandler } from 'react';

import styles from './Interval.module.scss';
import controlStyles from '../Controls.module.scss';

interface Props {
	handleChange: ChangeEventHandler,
	value: number | '',
}

const Interval: FC<Props> = ({ handleChange, value }) => {
	return (
		<label className={ controlStyles.controlsSection }>
			<p>Max Interval</p>
			<div className={ controlStyles.controlAlignment }>
				<input
					inputMode='numeric'
					onChange={ handleChange }
					value={ value }
					className={ styles.interval }
					type='number'
				/>&nbsp;step<span className={ value !== 1 ? '' : styles.invisible }>s</span>
			</div>
		</label>
	);
};

export default Interval;