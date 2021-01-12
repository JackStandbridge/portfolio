import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Interval from './Interval';

import { updateInterval } from '../../../../lib/slices/sightreading/reducer';
import { maxIntervalSelector } from '../../../../lib/slices/sightreading/selectors';

const ConnectedInterval: FC = () => {
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		dispatch(updateInterval(value === '' ? '' : +value));
	};

	const value = useSelector(maxIntervalSelector)

	return (
		<Interval
			handleChange={ handleChange }
			value={ value }
		/>
	);
};

export default ConnectedInterval;