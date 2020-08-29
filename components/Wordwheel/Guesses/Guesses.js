import { useCallback, useState } from 'react';
import Guess from '../Guess';
import Definition from '../Definition';

import styles from './Guesses.module.scss';

const Guesses = ({ words, handleClick, shownDefinition }) => {
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const ref = useCallback(node => {
		if (!node) {
			return;
		}

		const {
			x,
			y,
			width,
			height
		} = node.getBoundingClientRect();
		const top = y + height;
		const left = x + (width / 2);

		setTop(top);
		setLeft(left);

	});

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
									{ ...(word === shownDefinition ? { ref } : {}) }
								>
									<Guess
										guessedByUser={ guessedByUser }
										word={ word }
										handleClick={ () => handleClick(word) }
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
					top={ top }
					left={ left }
				/>
			}
		</section>
	);
}

export default Guesses;