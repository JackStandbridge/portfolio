import Line from '../Line';
import Guesses from '../Guesses';
import Target from '../Target';

import styles from './Game.module.scss';

const Game = () => {
	return (
		<main className={ styles.main }>
			<Target />
			<Guesses />
			<Line />
		</main>
	);
};

export default Game;