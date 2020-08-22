import Card from '../../components/Card';

import { capitalize } from '../../lib/utils';

const Games = () => {
	const games = [
		'wordwheel', 'bananagrams', 'colour flood', 'memory'
	];

	return (
		<main>
			<h1>Games</h1>
			{ games.map(game => (
				<Card
					key={ game }
					title={ capitalize(game) }
					img='https://placekitten.com/300/300'
					link={ 'games/' + game.replace(' ', '-') }
				/>
			))
			}
		</main>
	);
};

export default Games;
