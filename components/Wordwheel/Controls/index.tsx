import { FC } from 'react';

import Answers from './Answers';
import Define from './Define';
import Guess from './Guess';
import NewGame from './NewGame';
import Randomise from './Randomise';
import Undo from './Undo';

import styles from './Controls.module.scss';

const Controls: FC = () => {
	return (
		<section className={ styles.section }>
			<NewGame />
			<Randomise />
			<Define />
			<Undo />
			<Guess />
			<Answers />
		</section>
	);
};

export default Controls;