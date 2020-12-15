import { FC } from 'react';

const Stave: FC = () => {
	const lineGap = 10;

	return (
		<>

			<line
				x1={ 0 }
				y1={ lineGap }
				x2={ 500 }
				y2={ lineGap }
				stroke='#000'
				strokeWidth={ 1 }
				strokeLinecap='round'
			/>
			<line
				x1={ 0 }
				y1={ lineGap * 2 }
				x2={ 500 }
				y2={ lineGap * 2 }
				stroke='#000'
				strokeWidth={ 1 }
				strokeLinecap='round'
			/>
			<line
				x1={ 0 }
				y1={ lineGap * 3 }
				x2={ 500 }
				y2={ lineGap * 3 }
				stroke='#000'
				strokeWidth={ 1 }
				strokeLinecap='round'
			/>
			<line
				x1={ 0 }
				y1={ lineGap * 4 }
				x2={ 500 }
				y2={ lineGap * 4 }
				stroke='#000'
				strokeWidth={ 1 }
				strokeLinecap='round'
			/>
			<line
				x1={ 0 }
				y1={ lineGap * 5 }
				x2={ 500 }
				y2={ lineGap * 5 }
				stroke='#000'
				strokeWidth={ 1 }
				strokeLinecap='round'
			/>

		</>
	);
};

export default Stave;