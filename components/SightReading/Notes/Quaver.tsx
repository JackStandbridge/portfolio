import { FC } from 'react';
import { NoteProps } from '../../../lib/slices/sightreading/types';

const Quaver: FC<NoteProps & { stemDown?: boolean }> = ({ x, y, stemDown = false }) => {
	const lineRight = x + (stemDown ? -6.5 : 6.5);
	const lineTop = y - (stemDown ? - 40 : 40);
	const lineBottom = y + (stemDown ? 2 : -2);

	const upTail = `
		m ${ lineRight }, ${ lineTop }
		c 0,10 20,15 10,35
		c 7,-15 -5,-20 -10,-25
		z
	`;

	const downTail = `
		m ${ lineRight }, ${ lineTop }
		c 0,-10 20,-15 10,-35
		c 7,15 -5,20 -10,25
		z
	`;

	const tail = stemDown ? downTail : upTail;

	const translation = stemDown ? '5, 0' : '0, 0';

	return (
		<g transform={ `translate(${translation})` }>
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
				d={ tail }
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

export default Quaver;