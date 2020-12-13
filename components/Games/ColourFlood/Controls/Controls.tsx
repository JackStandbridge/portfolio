import { FC } from 'react';

import styles from './Controls.module.scss';

interface Props {
	colours: number[],
	handleClick: (n: number) => void,
	userColour: number,
};

const Controls: FC<Props> = ({ colours, handleClick, userColour }) => {
	return (
		<section className={ styles.container }>
			{ colours.map(colour => (
				<button
					key={ colour }
					disabled={ userColour === colour }
					onClick={ () => handleClick(colour) }
					className={ styles[`colour${ colour + 1 }`] }
				>
					{ colour + 1 }
				</button>
			)) }
		</section>
	);
};

export default Controls;