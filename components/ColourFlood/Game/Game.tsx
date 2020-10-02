import { FC } from 'react';

import Board from '../Board';
import Controls from '../Controls';

import styles from './Game.module.scss';

const Game: FC = () => {
	return (
		<main className={ styles.container }>
			<Board />
			<Controls />
		</main>
	);
};

export default Game;