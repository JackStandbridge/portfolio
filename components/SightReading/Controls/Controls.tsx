import { FC } from 'react';

import styles from './Controls.module.scss';

interface Props {
	handleToggle: () => void,
	show: boolean,
}

const Controls: FC<Props> = ({ handleToggle, show, children }) => {
	return (
		<header className={ styles.header }>
			<div className={ show ? styles.expanderShown : styles.expanderHidden }>
				<div className={ styles.container }>
					{ children }
				</div>
			</div>
			<button
				className={ styles.toggle }
				onClick={ handleToggle }
			>
				<span className={ show ? styles.iconReversed : '' }>&#9662;</span>
			</button>
		</header>
	);
};

export default Controls;