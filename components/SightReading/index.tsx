import { FC } from 'react';
import Bar from './Bar';
import Head from 'next/head'

import styles from './SightReading.module.scss';

const SightReading: FC = () => {
	return (
		<main className={ styles.container }>
			<Head>
				<title>JS | Sight Reading</title>
			</Head>
			<Bar
				voices={ [
					[
						['C5', 4],
						['B4', 2],
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
						['D4', 16],
						['E4', 16],
						['D4', 16],
						['C4', 16],
						['D4', 16],
						['E4', 16],
						['D4', 16],
						['C4', 16],
						['D4', 16],
					],
				] }
			/>
		</main>
	);
};

export default SightReading;