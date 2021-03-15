import { FC } from 'react';
import styles from './Reddit.module.scss';

import Links from './Links';
import Title from './Title';

import { SubredditListing } from './interfaces';

interface Props {
	sub: string,
	data: SubredditListing,
};

const Reddit: FC<Props> = ({ sub, data }) => {
	return (
		<main className={ styles.main }>
			<Title>{ sub }</Title>
			<Links links={ data.children }/>
		</main>
	);
}

export default Reddit;