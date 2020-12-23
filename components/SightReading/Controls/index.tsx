import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SemiBreve from '../Notes/SemiBreve';
import Minim from '../Notes/Minim';
import Crotchet from '../Notes/Crotchet';
import Quaver from '../Notes/Quaver';
import SemiQuaver from '../Notes/SemiQuaver';
import Controls from './Controls';

import { setDuration } from '../../../lib/slices/sightreading/reducer';
import { Duration, NoteProps } from '../../../lib/slices/sightreading/types';
import { durationSelector } from '../../../lib/slices/sightreading/selectors';

const ConnectedControls = () => {

	const dispatch = useDispatch();

	const handleClick = (value: Duration) => {
		dispatch(setDuration(value));
	};

	const durations = useSelector(durationSelector);

	const notes = [
		{ value: 1, note: SemiBreve, width: 30 },
		{ value: 2, note: Minim, width: 32 },
		{ value: 4, note: Crotchet, width: 32 },
		{ value: 8, note: Quaver, width: 40 },
		{ value: 16, note: SemiQuaver, width: 40 },
	] as { value: Duration, note: FC<NoteProps>, width: number }[];


	return (
		<Controls
			notes={ notes }
			handleClick={ handleClick }
			durations={ durations }
		/>
	);
};

export default ConnectedControls;