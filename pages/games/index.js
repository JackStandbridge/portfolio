import Card from '../../components/Card';

import { capitalize } from '../../lib/utils';

const Games = () => {
	const games = [
		{
			name: 'wordwheel',
			imgUrl: 'https://placekitten.com/300/301'
		},
		{
			name: 'bananagrams',
			imgUrl: 'https://placekitten.com/301/300'
		},
		{
			name: 'colour flood',
			imgUrl: 'https://placekitten.com/300/299'
		},
		{
			name: 'memory',
			imgUrl: 'https://placekitten.com/299/300'
		},
	];

	return (
		<main>
			<h1>Games</h1>
			{ games.map((game, i) => (
				<Card
					key={ i }
					title={ capitalize(game.name) }
					img={ game.imgUrl }
					link={ 'games/' + game.name.replace(' ', '-') }
				/>
			))
			}
		</main>
	);
};

export default Games;
