import { FC } from 'react';
import styles from './Square.module.scss';

interface Props {
	handleClick: () => void,
	className: string,
	disabled: boolean,
};

const Square: FC<Props> = ({ handleClick, className, disabled }) => (
	<button
		className={ styles[className] }
		onClick={ handleClick }
		disabled={ disabled }
	></button>
);


export default Square;