import Target from '../Target';
import Guesses from '../Guesses';
import Controls from '../Controls';
import Line from '../Line';

import styles from './Game.module.scss';

const Game = () => {
	return (
		<main className={ styles.main }>
			<Target />
			<Guesses />
			<Controls />
			<Line />
		</main>
	);
};

export default Game;