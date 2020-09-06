import Card from '../Card/Card';

import { capitalize } from '../../lib/utils';
import styles from './Games.module.scss';

const Games = ({ games }) => {
	return (
		<main className={ styles.main }>
			<h1>Games</h1>
			<section className={ styles.grid }>
				{ games.map((game, i) => (
					<Card
						key={ i }
						title={ capitalize(game.name) }
						img={ game.imgUrl }
						link={ 'games/' + game.name.replace(' ', '-') }
					/>
				)) }
			</section>
		</main>
	);
};

export default Games;
