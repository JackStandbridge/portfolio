import { FC, useState, MouseEventHandler, ReactNode } from 'react';
import Controls from './Controls';

type Props = {
	children: ReactNode;
};

const ConnectedControls = ({ children }: Props) => {
	const [show, setShow] = useState(true);

	const handleToggle: MouseEventHandler = () => {
		setShow(!show);
	};

	return (
		<Controls handleToggle={handleToggle} show={show}>
			{children}
		</Controls>
	);
};

export default ConnectedControls;
