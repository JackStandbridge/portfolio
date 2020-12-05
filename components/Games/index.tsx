import { FC } from 'react';

import Games from './Games';

const ConnectedGames: FC = () => {
	const games = [
		{
			url: 'wordwheel',
			imgUrl: '/assets/images/preview--wordwheel.png',
			title: 'Word Wheel',
		},
		{
			url: 'bananagrams',
			imgUrl: 'https://placekitten.com/301/300',
			title: 'Bananagrams',
		},
		{
			url: 'colourflood',
			imgUrl: 'https://placekitten.com/300/299',
			title: 'Colour Flood',
		},
		{
			url: 'memory',
			imgUrl: 'https://placekitten.com/299/300',
			title: 'Memory',
		},
		{
			url: 'madlibs',
			imgUrl: 'https://placekitten.com/300/300',
			title: 'Madlibs',
		},
	];

	return (
		<Games games={ games } />
	);
};

export default ConnectedGames;