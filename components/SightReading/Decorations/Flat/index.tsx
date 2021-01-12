import { FC } from 'react';

interface Props {
	coords: {
		x: number,
		y: number,
	},
};

const Flat: FC<Props> = ({ coords }) => {
	const centre = {
		x: coords.x - 17,
		y: coords.y + 5,
	}

	return (
		<g>
			<line
				x1={ centre.x }
				y1={ centre.y - 20 }
				x2={ centre.x }
				y2={ centre.y }
				stroke='#000'
				strokeWidth={ 1.5 }
				strokeLinecap='round'
			/>
			<path
				stroke="#000"
				strokeWidth={ 1 }
				strokeLinecap='round'
				strokeLinejoin='round'
				d={ `
					m ${ centre.x },${ centre.y }
					c 4,-3 7,-4 7,-7
					0,-4 -7,-4 -7,0.5
					0,-3.5 5,-5 5,-0
					0,3 -2,4 -5,6.5
					z
				`}
			/>
		</g>
	);
};

export default Flat;