import { FC } from 'react';
import styles from './Header.module.scss';

interface Props {
	guessed: number
	targets: {
		name: string
		value: number
		attained: boolean
	}[]
	total: number
}

const Header: FC<Props> = ({ guessed, targets, total }) => {
	return (
		<header className={ styles.header }>
			<h1 className={ styles.h1 }>WordWheel</h1>
			<span>Guessed: { guessed }</span>

			<span className={ styles.targets }>
				{ targets.map(({ name, value, attained }) => (
					<span
						className={ attained ? styles.attained : styles.target }
						key={ name }
					>
						{ name }: { value }
					</span>
				)) }
			</span>

			<span className={ styles.total }>Total: { total }</span>
		</header>
	);
};

export default Header;