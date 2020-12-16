import { FC } from 'react';
import { NoteCoordinates } from '../types';

const SemiQuaver: FC<NoteCoordinates> = ({ x, y }) => {
	const lineRight = x + 6.5;
	const lineTop = y - 40;

	return (
		<g>
			<line
				x1={ lineRight }
				y1={ lineTop }
				x2={ lineRight }
				y2={ y - 2 }
				stroke='#000'
				strokeWidth={ 2 }
				strokeLinecap='round'
			/>
			<path
				d={ `
					m ${ lineRight }, ${ lineTop }
					c 0,8 20,13 10,29
					c 7,-12 -5,-16 -10,-20
					z
				`}
				stroke='#000'
				fill='#000'
				strokeWidth={ 2 }
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d={ `
					m ${ lineRight }, ${ lineTop + 10 }
					c 0,8 20,13 10,29
					c 7,-12 -5,-16 -10,-20
					z
				`}
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