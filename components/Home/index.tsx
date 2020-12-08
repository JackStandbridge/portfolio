import { FC } from 'react';
import Games from '../Games';

import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<div className='site-width'>
			<header className={ styles.header }>
				<h1 className={ styles.h1 }>Jack Standbridge</h1>
			</header>
			<main className={ styles.main }>
				<article>
					<h2 className={ styles.h2 }>Welcome to my site</h2>
					<p>There's not much here yet, and that's because I haven't finished making the thing yet. In the mean time, here are a couple of games I created.</p>
					<Games />
				</article>
			</main>
		</div>
	);
};

export default Home;