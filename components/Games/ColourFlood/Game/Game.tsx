import { FC } from 'react';

import Board from '../Board';
import Controls from '../Controls';
import Pipe from '../Pipe';

import styles from './Game.module.scss';

const Game: FC = () => {
	return (
		<main className={ styles.container }>
			<Board />
			<Controls />
			<Pipe />
		</main>
	);
};

export default Game;