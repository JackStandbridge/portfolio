import { FC } from 'react';
import { NoteProps } from '../../../lib/slices/sightreading/types';

const Crotchet: FC<NoteProps> = ({ x, y, stemDown = false, ledgerLines = [] }) => {
	const lineRight = x + (stemDown ? -6.5 : 6.5);
	const lineTop = y - (stemDown ? - 40 : 40);
	const lineBottom = y + (stemDown ? 2 : -2);

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

export default Crotchet;