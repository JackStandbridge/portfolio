import Line from '../Line';
import styles from './game.module.scss';

const Game = () => {
	return (
		<main className={ styles.main }>
			<Line />
		</main>
	);
};

export default Game;