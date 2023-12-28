import { FC, Fragment } from 'react';
import Square from '../Square';
import styles from './Board.module.scss';
import { Board as BoardInterface } from '../../../lib/slices/colourflood/initial';

interface Props {
	board: BoardInterface;
}

const Board = ({ board }: Props) => {
	return (
		<section className={styles.board}>
			{board.map((line, y) => (
				<Fragment key={y}>
					{line.map((_, x) => (
						<Square key={x} coords={{ x: x, y: y }} />
					))}
				</Fragment>
			))}
		</section>
	);
};

export default Board;
