import { FC } from 'react';
import { NoteProps } from '../../../lib/slices/sightreading/types';

const SemiQuaver: FC<NoteProps> = ({ x, y, stemDown = false, ledgerLines = [] }) => {
	const lineRight = x + (stemDown ? -6.5 : 6.5);
	const lineTop = y - (stemDown ? - 40 : 40);
	const lineBottom = y + (stemDown ? 2 : -2);

	const upTail1 = `
		m ${ lineRight }, ${ lineTop }
		c 0,8 20,13 10,29
		c 7,-12 -5,-16 -10,-20
		z
	`;

	const downTail1 = `
		m ${ lineRight }, ${ lineTop }
		c 0,-8 20,-13 10,-29
		c 7,12 -5,16 -10,20
		z
	`;

	const tail1 = stemDown ? downTail1 : upTail1;

	const upTail2 = `
		m ${ lineRight }, ${ lineTop + 10 }
		c 0,8 20,13 10,29
		c 7,-12 -5,-16 -10,-20
		z
	`;

	const downTail2 = `
		m ${ lineRight }, ${ lineTop - 10 }
		c 0,-8 20,-13 10,-29
		c 7,12 -5,16 -10,20
		z
	`;

	const tail2 = stemDown ? downTail2 : upTail2;

	const translation = stemDown ? '5, 0' : '0, 0';

	return (
		<g transform={ `translate(${ translation })` }>
			{ ledgerLines }
			<line
				x1={ lineRight }
				y1={ lineTop }
				x2={ lineRight }
				y2={ lineBottom }
				stroke='#000'
				strokeWidth={ 2 }
				strokeLinecap='round'
			/>
			<path
				d={ tail1 }
				stroke='#000'
				fill='#000'
				strokeWidth={ 2 }
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d={ tail2 }
				stroke='#000'
				fill='#000'
				strokeWidth={ 2 }
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<ellipse
				transform={ `rotate(-20 ${ x } ${ y })` }
				ry={ 4 }
				rx={ 6.5 }
				cx={ x }
				cy={ y }
				fill='#000'
				stroke='#000'
				strokeWidth={ 2 }
			/>
		</g>
	);
};

export default SemiQuaver;