import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Button from './Button';

import { altKeySelector } from '../../../../../lib/slices/wordwheel/selectors';

interface Props {
	handleClick: () => void,
	instructions: string,
	title: {
		start: string,
		keyLetter: string,
		end: string,
	},
};

const ConnectedButton: FC<Props> = props => {
	const altKey = useSelector(altKeySelector);

	useEffect(() => {
		const keyListener = (e: KeyboardEvent): void => {
			if (!e.altKey) {
				return;
			}

			const key = e.code.split('').reverse()[0].toUpperCase();

			if (key === props.title.keyLetter) {
				props.handleClick();
			}
		};

		document.addEventListener('keydown', keyListener);

		return (): void => {
			document.removeEventListener('keydown', keyListener);
		};
	}, [props.handleClick, altKey]);

	return (
		<Button
			{...props}
			altKey={ altKey }
		/>
	);
};

export default ConnectedButton;