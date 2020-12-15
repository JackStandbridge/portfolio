import { FC } from 'react';
import Bar from './Bar';

import styles from './SightReading.module.scss';

const SightReading: FC = () => {
	return (
		<div className={ styles.container }>
			<Bar
				voices={ [
					[
						['C5', 4],
						['B4', 8],
						['A4', 4],
					],
					[
						['G4', 1],
					],
				] }
			/>

			<Bar
				voices={ [
					[
						['F5', 2],
						['E5', 2],
					],
				] }
			/>

			<Bar
				voices={ [
					[
						['D5', 4],
						['C5', 4],
						['B4', 4],
						['A4', 4],
					],
				] }
			/>

			<Bar
				voices={ [
					[
						['G4', 8],
						['F4', 8],
						['E4', 16],
						['D4', 16],
						['C4', 16],
					],
				] }
			/>
		</div>
	);
};

export default SightReading;