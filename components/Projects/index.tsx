import { FC } from 'react';

import Projects from './Projects';

const ConnectedProjects: FC = () => {
	const projects = [
		{
			link: '/games/wordwheel',
			imgUrl: '/assets/images/wordwheel2.png',
			title: 'Word Wheel (WIP)',
			blurb: [
				'Challenge yourself to come up with as many words as you can using the letters provided. Make sure to use the middle (yellow) letter in every word.',
				'NB: Work in progress. Mobile responsivity not yet implemented.'
			]
		},
		{
			link: 'https://jackstandbridge.github.io/css-playground/#flex',
			imgUrl: '/assets/images/css-playground.png',
			title: 'CSS Playground',
			blurb: [
				'An interactive playground to teach students of CSS how to use the many properties of flex and grid.'
			]
		},
		{
			link: '/placeholder-ipsum',
			imgUrl: '/assets/images/placeholder-ipsum2.png',
			title: 'Placeholder Ipsum',
			blurb: [
				'A simple Lorem Ipsum generator that explains that the content is just placeholder text. No need to worry about explaining to a client that the content of their site in progress isn\'t in place yet as this placeholder text will explain it for you.'
			]
		},
		{
			link: '/games/colourflood',
			imgUrl: '/assets/images/colourflood3.png',
			title: 'Colour Flood (WIP)',
			blurb: [
				'Turn all the squares one colour by clicking on them or the numbers at the bottom.',
				'NB: Work in progress. Game controls & highscores not yet implemented.'
			]
		},
		{
			link: '/sightreading',
			imgUrl: '/assets/images/sightreading3.png',
			title: 'Sightreading Trainer (WIP)',
			blurb: [
				'Randomly generated sheet music to help you practice your sight reading.',
				'NB: Work in progress. Soon to come: beams, accidentals, key & time signatures, bass clef, multiple voices.'
			]
		},
	];

	return (
		<Projects projects={ projects } />
	);
};

export default ConnectedProjects;