import { FC } from 'react';

import styles from './Pipe.module.scss';

interface Props {
	colour: number,
	pipeLeft: number,
	pipeWidth: number,
	sections: number[],
}

const Pipe: FC<Props> = ({ colour, pipeLeft, pipeWidth, sections }) => {
	const colourClass = styles[`colour${ colour + 1 }`];

	return (
		<>
			{ sections.map(section => {
				const classNames = `${ colourClass } ${ styles[`section${ section }`] }`;
				return <div key={ section } className={ classNames } />
			}) }

			<div
				className={ `${ colourClass } ${ styles[`section4`] }` }
				style={ { width: `${ pipeWidth }vmin` } }
			/>
			<div
				className={ `${ colourClass } ${ styles[`section5`] }` }
				style={ { left: `${ pipeLeft }vmin` } }
			/>
		</>
	);
};

export default Pipe;