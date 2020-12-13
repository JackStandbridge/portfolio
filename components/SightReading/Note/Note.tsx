import { FC } from 'react';

import styles from './Note.module.scss';

const Note: FC = () => {
	return (
		<span className={ styles.semibreve }>Note</span>
	);
};

export default Note;