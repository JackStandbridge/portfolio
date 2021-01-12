import { FC } from 'react';

interface Props {
	coords: {
		x: number,
		y: number,
	},
};

const Sharp: FC<Props> = ({ coords }) => {
	const centre = {
		x: coords.x - 15,
		y: coords.y + 1,
	}

	const rectangles = [
		{ // left vertical
			x: centre.x - 2,
			y: centre.y - 10,
			height: 20,
			width: 1.5,
		},
		{ // right vertical
			x: centre.x + 2,
			y: centre.y - 11,
			height: 20,
			width: 1.5,
		},
		{ // top horizontal
			x: centre.x - 4,
			y: centre.y - 6,
			height: 4,
			width: 10,
			transform: `skewY(-10)`
		},
		{ // bottom horizontal
			x: centre.x - 4,
			y: centre.y + 2,
			height: 4,
			width: 10,
			transform: `skewY(-10)`
		},
	];

	return (
		<>
			{
				rectangles.map((config, i) => (
					<g
						transform={ `translate(${ config.x }, ${ config.y })` }
						key={ i }
					>
						<rect
							height={ config.height }
							width={ config.width }
							transform={ config.transform }
							fill='#000'
						/>
					</g>
				))
			}
		</>
	);
};

export default Sharp;