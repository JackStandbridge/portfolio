import { FC, MouseEventHandler } from 'react';
import styles from './Square.module.scss';

interface Props {
	handleClick: MouseEventHandler,
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