import { useSelector, useDispatch } from 'react-redux';
import Letter from './Letter';

import { letterSelector, toggleLetter, deselectLetter } from '../../../lib/slices/wordwheel/reducer';

const LetterContainer = ({ id, dimensions, spacing, isNarrowScreen }) => {

	const dispatch = useDispatch();
	const letters = useSelector(letterSelector);

	const handleToggle = id => {
		dispatch(toggleLetter(id));
	};

	const handleDeselect = id => {
		dispatch(deselectLetter(id));
	};

	const {
		letter,
		selected,
		basePosition,
		raisedPosition,
	} = letters.entities[id];

	const scale = dimensions + spacing;

	const numberOfSelectedLetters = letters.ids
		.filter(id => letters.entities[id].selected)
		.length;

	const translateBy = (scale * (9 - numberOfSelectedLetters)) / 2;

	const row = isNarrowScreen ? Math.floor(basePosition / 3) : 0;
	const col = isNarrowScreen ? basePosition % 3 : basePosition;

	const baseTop = `calc(${ row } * ${ scale }rem)`;
	const baseLeft = `calc(${ col } * ${ scale }rem)`;

	const backingStyles = {
		// position backing divs simply in a line
		left: baseLeft,
		top: baseTop,
		// set the size
		height: `${ dimensions }rem`,
		width: `${ dimensions }rem`,
	};

	const buttonStyles = {
		// get the left position based on the selected raisedPosition order
		left: selected ? `calc(${ raisedPosition } * ${ scale }rem)` : baseLeft,
		// transform it towards the middle based on how many are selected to centre
		transform: selected ? `translateX(${ translateBy }rem)` : undefined,
		// move it up out of the base row
		top: selected ? `-${ dimensions + (spacing * 4) }rem` : baseTop,
		// set the size
		height: `${ dimensions }rem`,
		width: `${ dimensions }rem`,
	};

	return (
		<Letter
			id={ id }
			backingStyles={ backingStyles }
			buttonStyles={ buttonStyles }
			letter={ letter }
			handleToggle={ handleToggle }
			handleDeselect={ handleDeselect }
		/>
	);
};

export default LetterContainer;