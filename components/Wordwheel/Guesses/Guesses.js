import Guess from '../Guess';
import Definition from '../Definition';

import styles from './Guesses.module.scss';

const Guesses = ({
	words,
	handleClick,
	shownDefinition,
	handleBlur,
	top,
	left,
	selectedRef
}) => {
	return (
		<section className={ styles.section }>
			<ul className={ styles.mainUl }>
				{ Object.values(words).map(section => (

					<li key={ section.id }>
						<ul className={ styles.subUl }>

							{ section.words.map(({ word, guessedByUser }) => (
								<li
									key={ word }
									className={ styles.li }
									{ ...(word === shownDefinition ? { ref: selectedRef } : {}) }
								>
									<Guess
										guessedByUser={ guessedByUser }
										word={ word }
										handleClick={ () => handleClick(word) }
										handleBlur={ handleBlur }
									/>
								</li>
							)) }

						</ul>
					</li>

				)) }
			</ul>
			{ shownDefinition &&
				<Definition
					word={ shownDefinition }
					handleBlur={ handleBlur }
					top={ top }
					left={ left }
				/>
			}
		</section>
	);
}

export default Guesses;