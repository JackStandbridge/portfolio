import { FC } from 'react';
import Projects from '../Projects';

import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<div className={ styles.background }>
			<div className='site-width'>
				<div className={ styles.top }>
					<header className={ styles.header }>
						<h1 className={ styles.h1 }>Hello,<br/>I'm Jack<br />Standbridge</h1>
						<p className={ styles.blurb }>I'm a web developer with a passion for learning and creating fun side projects. Take a look at some that I've created so far.</p>
					</header>
				</div>

				<main className={ styles.main }>
					<article>
						<Projects />
					</article>
				</main>
			</div>
		</div>
	);
};

export default Home;