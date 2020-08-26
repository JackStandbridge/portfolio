import React from 'react';
import styles from './Guesses.module.scss';

const Guesses = ({ guesses }) => {
	return (
		<ul className={ styles.mainUl }>
			{ Object.values(guesses).map(section => (

				<li key={ section.id }>
					<ul className={ styles.subUl }>

						{ section.guesses.map(guess => (
							<li
								key={ guess }
								className={ styles.guess }
							>
								{ guess }
							</li>
						)) }

					</ul>
				</li>

			)) }
		</ul>
	);
};

export default Guesses;