import { FC } from 'react';

import Card from '../Card/Card';

import styles from './Games.module.scss';

interface Props {
	games: {
		title: string
		imgUrl: string
		url: string
	}[]
}

const Games: FC<Props> = ({ games }) => {
	return (
		<main className={ styles.main }>
			<h1 className={ styles.title }>Games</h1>
			<section className={ styles.grid }>
				{ games.map((game, i) => (
					<Card
						key={ i }
						title={ game.title }
						img={ game.imgUrl }
						link={ `games/${ game.url }` }
					/>
				)) }
			</section>
		</main>
	);
};

export default Games;