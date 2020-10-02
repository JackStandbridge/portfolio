import { FC } from 'react';
import styles from './Square.module.scss';

interface Props {
	handleClick: () => void,
	className: string,
};

const Square: FC<Props> = ({ handleClick, className }) => (
	<button
		className={ styles[className] }
		onClick={ handleClick }
	></button>
);


export default Square;