import { FC } from 'react';

import Html from '../Html';

import styles from './Title.module.scss';

interface Props {
	text: string,
};

const Title: FC<Props> = ({ text }) => {
	return (
		<h1 className={ styles.title }>
			<Html text={ text } />
		</h1>
	);
};

export default Title;