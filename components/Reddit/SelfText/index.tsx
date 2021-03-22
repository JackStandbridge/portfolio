import { FC, useState } from 'react';

import Html from '../Html';

import styles from './SelfText.module.scss';

interface Props {
	text: string
};

const SelfText: FC<Props> = ({ text }) => {
	const [toggled, setToggled] = useState(false);

	const handleClick = () => {
		setToggled(!toggled);
	};

	return (
		<div className={ toggled ? styles.toggledContainer : styles.container }>
			<button disabled={ !text } onClick={ handleClick } className={ styles.button }>Aa</button>
			{ toggled &&
				<section className={ styles.text }>
					<Html text={ text } />
				</section>
			}
		</div>
	);
};

export default SelfText;