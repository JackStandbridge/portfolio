import { FC } from 'react';

interface Props {
	x: number,
	y: number,
}

const Minim: FC<Props> = ({ x, y }) => {
	const lineRight = x + 6.5;
	const lineTop = y - 40;
	const id = `counter${ x }${ y }`

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