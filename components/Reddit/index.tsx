import { FC } from 'react';
import Head from 'next/head';

import Links from './Links';
import Title from './Title';

import { SubredditListing } from './interfaces';
import styles from './Reddit.module.scss';

interface Props {
	sub: string,
	data: SubredditListing,
};

const Reddit: FC<Props> = ({ sub, data }) => {
	return (
		<>
			<Head>
				<title>{ sub }</title>
			</Head>
			<main className={ styles.main }>
				<Title text={ sub } />
				<Links links={ data.children } />
			</main>
		</>
	);
}

export default Reddit;