import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Controls from './Controls';
import { altActive } from '../../../lib/slices/wordwheel/reducer';

const ConnectedControls: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const keyDownListener = (e: KeyboardEvent): void => {
			if (e.key === 'Alt') {
				dispatch(altActive(true));
			}
		};

		document.addEventListener('keydown', keyDownListener);

		const keyUpListener = (e: KeyboardEvent): void => {
			if (e.key === 'Alt') {
				dispatch(altActive(false));
			}
		}

		document.addEventListener('keyup', keyUpListener);

		return (): void => {
			document.removeEventListener('keydown', keyDownListener);
			document.removeEventListener('keyup', keyUpListener);
		};
	}, []);

	return (
		<Controls />
	);
};

export default ConnectedControls;