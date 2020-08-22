import { Fragment } from 'react';
import styles from './Line.module.scss';

const Line = ({ letters, handleClick }) => {
	const dimensions = 5;
	const spacing = 0.5;
	const scale = dimensions + spacing;

	const numberOfSelectedLetters = letters.ids
		.filter(id => letters.entities[id].selected)
		.length;

	const translateBy = (scale * (9 - numberOfSelectedLetters)) / 2;

	const lineStyle = {
		width: `calc((9 * ${ scale }rem) - 0.5rem)`,
		height: `${ dimensions }rem`,
	};

	return (
		<div
			className={ styles.line }
			style={ lineStyle }
		>

			{ letters.ids.map(id => {

				const {
					letter,
					selected,
					basePosition,
					raisedPosition,
				} = letters.entities[id];

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
					<Fragment key={ id }>
						<button
							style={ backingStyles }
							className={ styles.backing }
						>
							{ letter }
						</button>

						<button
							style={ buttonStyles }
							onClick={ () => handleClick(id) }
							className={ styles.button }
						>
							{ letter }
						</button>
					</Fragment>
				);

			}) }

		</div>
	);
};

export default Line;