import Letter from '../Letter';
import styles from './Line.module.scss';

const Line = ({
	letterIds,
	isWheelLayout,
	scale,
	spacing,
	dimensions,
	focused,
}) => {
	return (
		<div className={ styles.wrapper }>
			<div className={ styles.focusable }>
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
		</div>
	);
};

export default Line;