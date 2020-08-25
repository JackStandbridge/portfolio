import { useSelector, useDispatch } from 'react-redux';
import Letter from './Letter';

import { letterSelector, toggleLetter, deselectLetter } from '../../../lib/slices/wordwheel/reducer';

const LetterContainer = ({ id, isWheelLayout, scale, spacing, dimensions }) => {

	const dispatch = useDispatch();
	const letters = useSelector(letterSelector);

	const handleToggle = id => {
		document.activeElement.blur();
		dispatch(toggleLetter(id));
	};

	const handleDeselect = id => {
		document.activeElement.blur();
		dispatch(deselectLetter(id));
	};

	const {
		letter,
		selected,
		basePosition,
		raisedPosition,
	} = letters.entities[id] ?? {};

	const numberOfSelectedLetters = letters.ids
		.filter(id => letters.entities[id].selected)
		.length;

	const translateBy = (scale * (9 - numberOfSelectedLetters)) / 2;

	const row = isWheelLayout ? Math.floor(basePosition / 3) : 0;
	const col = isWheelLayout ? basePosition % 3 : basePosition;

	const baseTop = `calc(${ row } * ${ scale }rem)`;
	const baseLeft = `calc(${ col } * ${ scale }rem)`;

	const width = dimensions;
	const height = dimensions;

	const backingStyles = {
		// position backing divs simply in a line
		left: baseLeft,
		top: baseTop,
		// set the size
		height: `${ height }rem`,
		width: `${ width }rem`,
	};

	const buttonStyles = {
		// get the left position based on the selected raisedPosition order
		left: selected ? `calc(${ raisedPosition } * ${ scale }rem + ${ translateBy }rem)` : baseLeft,
		// move it up out of the base row
		top: selected ? `-${ dimensions + (spacing * 2) }rem` : baseTop,
		// set the size
		height: `${ height }rem`,
		width: `${ width }rem`,
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