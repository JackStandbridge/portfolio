import { FC } from 'react';

import Card from '../Card/Card';

import styles from './Projects.module.scss';

interface Props {
	projects: {
		title: string,
		imgUrl: string,
		link: string,
		blurb: string[],
	}[],
}

const Projects: FC<Props> = ({ projects }) => {
	return (
		<main className={ styles.main }>
			<h1 className={ styles.title }>Projects</h1>
			<>
				{ projects.map((game, i) => (
					<Card
						key={ i }
						index={ i }
						{ ...game }
					/>
				)) }
			</>
		</main>
	);
};

export default Projects;
