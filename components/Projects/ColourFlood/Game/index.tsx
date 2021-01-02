import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Game from './Game';

import { setColour } from '../../../../lib/slices/colourflood/reducer';

const ConnectedGame: FC = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		const keyListener = (e: KeyboardEvent): void => {
			if (e.key.match(/\d/)) {
				dispatch(setColour(+e.key - 1));
			}
		};

		document.addEventListener('keydown', keyListener);

		return (): void => {
			document.removeEventListener('keydown', keyListener);
		};
	}, []);


	return (
		<Game />
	);
};

export default ConnectedGame;