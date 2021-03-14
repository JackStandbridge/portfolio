import { FC, useState, MouseEventHandler } from 'react';
import Controls from './Controls';

const ConnectedControls: FC = ({ children }) => {
	const [show, setShow] = useState(true);

	const handleToggle: MouseEventHandler = () => {
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