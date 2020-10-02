import { FC } from 'react';
import Guess from '../Guess';
import Definition from '../Definition';

import styles from './Guesses.module.scss';

export interface Words {
	[key: string]: {
		id: string
		words: {
			word: string
			guessedByUser: boolean
		} []
	}
}
interface Props {
	words: Words,
	handleBlur: () => void
	handleClick: (word: string) => void
	shownDefinition: null | string
	top: number
	left: number
	selectedRef: (node: any) => void
}

const Guesses: FC<Props> = ({
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