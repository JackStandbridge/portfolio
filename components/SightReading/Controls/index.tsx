import { FC, useState } from 'react';
import Controls from './Controls';

const ConnectedControls: FC = ({ children }) => {
	const [show, setShow] = useState(true);

	const handleToggle = () => {
		setShow(!show);
	};

	return (
		<Controls
			handleToggle={ handleToggle }
			show={ show }
		>{ children }</Controls>
	);
};

export default ConnectedControls;