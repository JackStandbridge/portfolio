import { FC } from 'react';

import styles from './Button.module.scss';

interface Props {
	handleClick: (e: React.MouseEvent) => void,
	instructions: string,
	title: {
		start: string,
		keyLetter: string,
		end: string,
	},
	altKey: boolean,
};

const Button: FC<Props> = ({
	handleClick,
	instructions,
	title,
	altKey
}) => {
	return (
		<div className={ styles.instructions }>
			<button
				className={ styles.button }
				onClick={ handleClick }
				title={ instructions }
			>
				{ title.start }
				<span className={ altKey ? styles.keyLetter : '' }>{ title.keyLetter }</span>
				{ title.end }
			</button>
		</div>
	);
};

export default Button;