import Games from './Games';

const GamesContainer = () => {
	const games = [
		{
			name: 'wordwheel',
			imgUrl: '/assets/images/preview--wordwheel.png'
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
		{
			name: 'madlibs',
			imgUrl: 'https://placekitten.com/300/300'
		},
	];

	return (
		<Games games={ games } />
	);
};

export default GamesContainer;