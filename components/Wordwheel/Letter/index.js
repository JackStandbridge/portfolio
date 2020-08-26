import { useSelector, useDispatch } from 'react-redux';
import Letter from './Letter';

import { letterSelector, toggleLetter, deselectLetter, positionSelector } from '../../../lib/slices/wordwheel/reducer';

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
	} = letters.entities[id] ?? {};

	const { raisedPosition, basePosition } = useSelector(state => positionSelector(state, id));

	const numberOfSelectedLetters = letters.ids
		.filter(id => letters.entities[id].selected)
		.length;

	const translateBy = (scale * (9 - numberOfSelectedLetters)) / 2;

	const row = isWheelLayout ? Math.floor(id / 3) : 0;
	const col = isWheelLayout ? id % 3 : basePosition;

	const baseTop = `calc(${ row * (isWheelLayout ? 3 : 1) } * ${ scale }rem)`;
	const baseLeft = `calc(${ col * (isWheelLayout ? 3 : 1) } * ${ scale }rem)`;

	const lineHeight = dimensions;
	const lineWidth = dimensions;

	const baseHeight = dimensions * (isWheelLayout ? 3 : 1) + (isWheelLayout ? spacing * 2 : 0);
	const baseWidth = dimensions * (isWheelLayout ? 3 : 1) + (isWheelLayout ? spacing * 2 : 0);

	const backingStyles = {
		// position backing divs simply in a line
		left: baseLeft,
		top: baseTop,
		// set the size
		height: `${ baseHeight }rem`,
		width: `${ baseWidth }rem`,
	};

	const buttonStyles = {
		// get the left position based on the selected raisedPosition order
		left: selected ? `calc(${ raisedPosition } * ${ scale }rem + ${ translateBy }rem)` : baseLeft,
		// move it up out of the base row
		top: selected ? `-${ dimensions + (spacing * 2) }rem` : baseTop,
		// set the size
		height: `${ (!selected && isWheelLayout) ? baseHeight : lineHeight }rem`,
		width: `${ (!selected && isWheelLayout) ? baseWidth : lineWidth }rem`,
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