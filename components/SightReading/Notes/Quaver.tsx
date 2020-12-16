import { FC } from 'react';
import { NoteCoordinates } from '../types';

const Quaver: FC<NoteCoordinates> = ({ x, y }) => {
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
					c 0,10 20,15 10,35
					c 7,-15 -5,-20 -10,-25
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

export default Quaver;