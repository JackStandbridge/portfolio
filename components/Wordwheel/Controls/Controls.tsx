import { FC } from 'react';

import ShowAnswers from './ShowAnswers';
import Define from './Define';
import Guess from './Guess';
import NewGame from './NewGame';
import Randomise from './Randomise';
import Undo from './Undo';
import Instructions from './Instructions';

import styles from './Controls.module.scss';

const Controls: FC = () => {
	return (
		<section className={ styles.section }>
			<NewGame />
			<Randomise />
			<Define />
			<Undo />
			<Guess />
			<ShowAnswers />
			<Instructions />
		</section>
	);
};

export default Controls;