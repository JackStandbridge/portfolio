import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from 'react';
import styles from './Title.module.scss';

interface Props {
	text: string,
	handleChange: ChangeEventHandler<HTMLInputElement>,
	handleBlur: FocusEventHandler,
	handleKeyDown: KeyboardEventHandler<HTMLInputElement>,
};

const Title = ({ text, handleChange, handleBlur, handleKeyDown }: Props): JSX.Element => {
	return (
		<input
			className={ styles.title }
			value={ text }
			onChange={ handleChange }
			onKeyDown={ handleKeyDown }
			onBlur={ handleBlur }
		/>
	);
};

export default Title;