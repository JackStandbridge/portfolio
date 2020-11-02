import { FC } from 'react';

import styles from './Pipe.module.scss';

interface Props {
	colour: number,
	difficulty: number,
}

const Pipe: FC<Props> = ({ colour, difficulty }) => {
	const sections = [1, 2, 3];
	const colourClass = styles[`colour${ colour + 1 }`];
	const blockWidth = 3;
	const gap = 0.5;
	const dimensions = 10;
	const width = (dimensions * blockWidth) + (gap * (dimensions - 1));
	console.log(width * 16);
	const padding = 2.5;
	const controlWidth = 4;
	const bounds = width - controlWidth;

	const pipeLeft = padding + (controlWidth / 2) + (bounds / (difficulty - 1)) * colour;
	const pipeThickness = 0.75;
	const pipeWidth = pipeLeft - pipeThickness;

	return (
		<>
			{ sections.map(section => {
				const classNames = `${ colourClass } ${ styles[`section${ section }`] }`;
				return <div key={ section } className={ classNames } />
			}) }

			<div
				className={ `${ colourClass } ${ styles[`section4`] }` }
				style={ { width: `${ Math.round(pipeWidth * 16) }px` } }
			/>
			<div
				className={ `${ colourClass } ${ styles[`section5`] }` }
				style={ { left: `${ Math.round(pipeLeft * 16) }px` } }
			/>
		</>
	);
};

export default Pipe;