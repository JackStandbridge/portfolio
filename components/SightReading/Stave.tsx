import { FC } from 'react';

const Stave: FC = () => {
	const lineGap = 10;

	const lines = [1, 2, 3, 4, 5];

	return (
		<g>
			{/* stave lines */}
			{ lines.map(lineNum => (
				<line
					key={ lineNum }
					x1='0%'
					y1={ lineGap * lineNum }
					x2='100%'
					y2={ lineGap * lineNum }
					stroke='#000'
					strokeWidth={ 1 }
				/>
			)) }

			{/* start of bar line */}
			<line
				x1='0%'
				y1={ lineGap }
				x2='0%'
				y2={ lineGap * 5 }
				stroke='#000'
				strokeWidth={ 2 }
			/>

			{/* end of bar line */}
			<line
				x1='100%'
				y1={ lineGap }
				x2='100%'
				y2={ lineGap * 5 }
				stroke='#000'
				strokeWidth={ 2 }
			/>
		</g>
	);
};

export default Stave;