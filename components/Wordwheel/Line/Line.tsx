import { FC } from 'react';
import Letter from '../Letter';
import styles from './Line.module.scss';

interface Props {
	letterIds: number[]
	isWheelLayout: boolean
	scale: number
	spacing: number
	dimensions: number
	focused: number
}

const Line: FC<Props> = ({
	letterIds,
	isWheelLayout,
	scale,
	spacing,
	dimensions,
	focused,
}) => {
	return (
		<div className={ styles.wrapper }>
			<div className={ styles.center }>
				<div className={ styles.line }>

					{ letterIds.map(id => (
						<Letter
							scale={ scale }
							spacing={ spacing }
							dimensions={ dimensions }
							isWheelLayout={ isWheelLayout }
							key={ id }
							id={ id }
							focused={ focused === id }
						/>
					)) }

				</div>
			</div>
			<p className={ styles.instructions }>
				<b>click</b> and <b>drag</b> (or <small><b>OPT</b></small> + <span className={ styles.reverse }>&#10140;</span> / &#10140;)
			</p>
		</div>
	);
};

export default Line;