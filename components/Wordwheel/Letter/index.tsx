import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Letter from './Letter';

import { toggleLetter, deselectLetter } from '../../../lib/slices/wordwheel/reducer';
import { useDrag } from '../../../lib/hooks';
import {
	letterSelector,
	positionSelector,
} from '../../../lib/slices/wordwheel/selectors';

interface Props {
	id: number,
	isWheelLayout: boolean,
	scale: number,
	dimensions: number,
	spacing: number,
	focused: boolean,
}

const ConnectedLetter: FC<Props> = ({
	id,
	isWheelLayout,
	scale,
	spacing,
	dimensions,
	focused,
}) => {

	const dispatch = useDispatch();
	const letters = useSelector(letterSelector);

	const {
		letter,
		selected,
	} = letters.entities[id] ?? {};

	const { raisedPosition, basePosition } = useSelector(positionSelector(id));

	const numberOfSelectedLetters = letters.ids
		.filter((id: number) => letters.entities[id].selected)
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

	const spacingInPx = spacing * 16;
	const [handleDragStart, dragLeft, movingLetter] = useDrag(spacingInPx, id, basePosition);

	buttonStyles.left = dragLeft ? `${dragLeft}px` : buttonStyles.left;

	const handleToggle = (id: number) => {
		if (!movingLetter) {
			dispatch(toggleLetter(id));
		}
	};

	const handleDeselect = (id: number) => {
		dispatch(deselectLetter(id));
	};

	return (
		<Letter
			id={ id }
			letter={ letter }
			focused={ focused }
			backingStyles={ backingStyles }
			buttonStyles={ buttonStyles }

			handleToggle={ handleToggle }
			handleDeselect={ handleDeselect }

			handleDragStart={ handleDragStart }
		/>
	);
};

export default ConnectedLetter;