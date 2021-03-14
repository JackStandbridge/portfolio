import { FC, MouseEventHandler } from 'react';
import styles from './Refresh.module.scss';
import controlStyles from '../Controls.module.scss';

interface Props {
	generateBars: MouseEventHandler,
}

const Refresh: FC<Props> = ({ generateBars }) => {
	return (
		<section className={ controlStyles.controlsSection }>
			<p>Refresh</p>
			<div className={ controlStyles.controlAlignment }>
				<button className={ styles.button } onClick={ generateBars }>
					<span className={ styles.hidden }>Refresh</span>

					<svg
						className={ styles.icon }
						viewBox='0 0 60 60'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<g>
							<path
								d="
									m 25,10
									s 15,0 15,15
									s -15,15 -15,15
									s -15,-0 -15,-15
									c 0,-2 0,-6 5,-10
									c 0,0 0,0 2,8
									c 0,0 0,0 -2,-8
									c 0,0 0,0 -8,1
								"
								transform='translate(5,5)'
								strokeWidth="4"
								stroke="#222"
								fill="#fff"
							/>
						</g>
					</svg>
				</button>
			</div>
		</section>
	);
};

export default Refresh;