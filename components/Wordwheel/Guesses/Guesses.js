import Guess from '../Guess';
import Definition from '../Definition';

import styles from './Guesses.module.scss';

const Guesses = ({ words, handleClick, shownDefinition }) => (
	<section className={ styles.section }>
		<ul className={ styles.mainUl }>
			{ Object.values(words).map(section => (

				<li key={ section.id }>
					<ul className={ styles.subUl }>

						{ section.words.map(({ word, guessedByUser }) => (
							<li
								key={ word }
								className={ styles.li }
							>
								<Guess
									guessedByUser={ guessedByUser }
									word={ word }
									handleClick={ () => handleClick(word) }
								/>

								{ shownDefinition === word &&
									<Definition word={ word } />
								}
							</li>
						)) }

					</ul>
				</li>

			)) }
		</ul>
	</section>
);

export default Guesses;