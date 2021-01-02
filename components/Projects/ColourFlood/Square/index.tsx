import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Square from './Square';

import { squareSelector, boardSelector } from '../../../../lib/slices/colourflood/selectors';
import { setColour } from '../../../../lib/slices/colourflood/reducer';
import { useNeighbours } from '../../../../lib/hooks';

interface Props {
	coords: {
		x: number,
		y: number,
	},
};

const ConnectedSquare: FC<Props> = ({ coords }) => {
	const dispatch = useDispatch();

	const { colour, disabled } = useSelector(squareSelector(coords));

	const handleClick = () => {
		dispatch(setColour(colour));
	};

	const board = useSelector(boardSelector);
	const [joinDown, joinRight] = useNeighbours(coords, board);

	const aux1 = `${ joinDown ? '--join-down' : '' }`;
	const aux2 = `${ joinRight ? '--join-right' : '' }`;
	const className = `colour${ colour + 1 }${ aux1 }${ aux2 }`;

	return (
		<Square
			disabled={ disabled }
			handleClick={ handleClick }
			className={ className }
		/>
	);
};

export default ConnectedSquare;