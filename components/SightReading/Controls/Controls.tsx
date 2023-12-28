import { FC, MouseEventHandler, ReactNode } from 'react';

import styles from './Controls.module.scss';

interface Props {
	handleToggle: MouseEventHandler;
	show: boolean;
	children: ReactNode;
}

const Controls = ({ handleToggle, show, children }: Props) => {
	return (
		<header className={styles.header}>
			<div className={show ? styles.expanderShown : styles.expanderHidden}>
				<div className={styles.container}>{children}</div>
			</div>
			<button className={styles.toggle} onClick={handleToggle}>
				<span className={show ? styles.iconReversed : ''}>&#9662;</span>
			</button>
		</header>
	);
};

export default Controls;
