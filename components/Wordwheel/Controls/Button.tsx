import { FC } from 'react';

import styles from './Button.module.scss';

interface Props {
	handleClick: (e: React.MouseEvent) => void,
	instructions: string,
	title: string,
};

const Button: FC<Props> = ({ handleClick, instructions, title }) => {
	return (
		<div className={ styles.instructions }>
			<button
				className={ styles.button }
				onClick={ handleClick }
				title={ instructions }
			>
				{ title }
			</button>
		</div>
	);
};

export default Button;