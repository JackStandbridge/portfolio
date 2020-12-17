import { FC } from 'react';
import { NoteCoordinates } from '../types';

type Props = NoteCoordinates & {
	barNumber: number,
};

const SemiBreve: FC<Props> = ({ x, y, barNumber }) => {
	const id = `counter${ x }${ y }${ barNumber }`;

	return (
		<g>
			<mask id={ id }>
				<rect width="100%" height="100%" fill="white" />
				<ellipse
					transform={ `rotate(45 ${ x } ${ y })` }
					ry={ 3.5 }
					rx={ 4.5 }
					cx={ x }
					cy={ y }
					fill='black'
				/>
			</mask>

			<ellipse
				mask={ `url(#${ id })` }
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

export default SemiBreve;