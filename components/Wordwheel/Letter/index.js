import { useSelector, useDispatch } from 'react-redux';
import Letter from './Letter';

import { letterSelector, toggleLetter } from '../../../lib/slices/wordwheel/reducer';

const LetterContainer = ({ id, dimensions, spacing }) => {

	const dispatch = useDispatch();
	const letters = useSelector(letterSelector);

	const handleClick = id => {
		dispatch(toggleLetter(id));
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

	const backingStyles = {
		// position backing divs simply in a line
		left: `calc(${ basePosition } * ${ scale }rem)`,
		// set the size
		height: `${ dimensions }rem`,
		width: `${ dimensions }rem`,
	};

	const buttonStyles = {
		// get the left position based on the selected raisedPosition order
		left: `calc(${ selected ? raisedPosition : basePosition } * ${ scale }rem)`,
		// transform it towards the middle based on how many are selected to centre
		transform: selected ? `translateX(${ translateBy }rem)` : undefined,
		// move it up out of the base row
		top: selected ? `-${ dimensions + (spacing * 4) }rem` : 0,
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
			handleClick={ handleClick }
		/>
	);
};

export default LetterContainer;