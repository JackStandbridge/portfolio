import { FC } from 'react';
import Board from '../Board';

import styles from './Game.module.scss';

const Game: FC = () => {
	return (
		<main className={ styles.container }>
			<Board />
		</main>
	);
};

export default Game;