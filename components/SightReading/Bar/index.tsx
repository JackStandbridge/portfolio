import { FC } from 'react';

import Stave from '../Stave';

import styles from './Bar.module.scss';

const Bar: FC = ({ children }) => {
	return (
		<div>
			<Stave/>
			{ children }
		</div>
	);
};

export default Bar;