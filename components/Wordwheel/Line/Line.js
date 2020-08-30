import Letter from '../Letter';
import styles from './Line.module.scss';

const Line = ({
	letterIds,
	isWheelLayout,
	scale,
	spacing,
	dimensions,
	focused,
	handleFocus,
	handleBlur,
}) => {
	return (
		<div className={ styles.wrapper }>
			<div
				tabIndex='0'
				className={ styles.focusable }
				onFocus={ handleFocus }
				onBlur={ handleBlur }
			>
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