import { useEffect, FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Definition from './Definition';

import { definitionsSelector } from '../../../../lib/slices/wordwheel/selectors';
import { getWordInfo } from '../../../../lib/slices/wordwheel/async';

interface Props {
	word: string
	top: number
	left: number
	handleBlur: () => void
}

const ConnectedDefinition: FunctionComponent<Props> = ({
	word,
	top,
	left,
	handleBlur
}) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWordInfo(word));
	}, [word, dispatch]);

	const definitions = useSelector(definitionsSelector(word));

	useEffect(() => {
		const escapeListener = ({ key }: KeyboardEvent) => {
			if (key === 'Escape') {
				handleBlur();
			}
		}

		document.addEventListener('keydown', escapeListener);

		return () => document.removeEventListener('keydown', escapeListener);
	}, [handleBlur]);

	return (
		<Definition
			definitions={ definitions }
			top={ top }
			left={ left }
		/>
	);
};

export default ConnectedDefinition;