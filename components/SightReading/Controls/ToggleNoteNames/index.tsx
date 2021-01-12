import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleNoteNames from './ToggleNoteNames';
import { toggleNoteNames } from '../../../../lib/slices/sightreading/reducer';
import { showNoteNameSelector } from '../../../../lib/slices/sightreading/selectors';

const ConnectedToggleNoteNames: FC = () => {
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(toggleNoteNames());
	};

	const active = useSelector(showNoteNameSelector);

	return (
		<ToggleNoteNames
			handleToggle={ handleToggle }
			active={ active }
		/>
	);
};

export default ConnectedToggleNoteNames;