import { FC } from 'react';
import { NoteProps } from '../../../lib/slices/sightreading/types';

const Minim: FC<NoteProps> = ({ x, y, barNumber, stemDown = false, ledgerLines = [] }) => {
	const lineRight = x + (stemDown ? -6.5 : 6.5);
	const lineTop = y - (stemDown ? - 40 : 40);
	const lineBottom = y + (stemDown ? 2 : -2);
	const id = `counter${ x }${ y }${ barNumber }`;

	return (
		<g>
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

			<mask id={ id }>
				<rect width="100%" height="100%" fill="white" />
				<ellipse
					ry={ 2.5 }
					rx={ 6 }
					cx={ x }
					cy={ y }
					fill='#000'
				/>
			</mask>

			<ellipse
				mask={ `url(#${ id })` }
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

export default Minim;