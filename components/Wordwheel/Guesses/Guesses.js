import React from 'react';
import styles from './Guesses.module.scss';

const Guesses = ({ words }) => {
	return (
		<section className={ styles.section }>
			<ul className={ styles.mainUl }>
				{ Object.values(words).map(section => (

					<li key={ section.id }>
						<ul className={ styles.subUl }>

							{ section.guesses.map(({ word, guessedByUser }) => (
								<li
									key={ word }
									className={ guessedByUser ? styles.guess : styles.answer }
								>
									{ word }
								</li>
							)) }

						</ul>
					</li>

				)) }
			</ul>
		</section>
	);
};

export default Guesses;