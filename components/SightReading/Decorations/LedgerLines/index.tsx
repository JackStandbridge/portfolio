import { FC } from 'react';

interface Props {
	lines: number[],
	x: number,
	y: number,
}

const LedgerLines: FC<Props> = ({ lines, x, y }) => {
	return (
		<>
			{
				lines.map(position => (
					<line
						key={ position }
						x1={ x - 10 }
						y1={ y + position }
						x2={ x + 10 }
						y2={ y + position }
						stroke='#000'
						strokeWidth='1'
						strokeLinecap='round'
					/>
				))
			}
		</>
	);
};

export default LedgerLines;