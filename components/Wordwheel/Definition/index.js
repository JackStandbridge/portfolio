import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Definition from './Definition';

import { definitionsSelector } from '../../../lib/slices/wordwheel/selectors';
import { getWordInfo } from '../../../lib/slices/wordwheel/async';

const DefinitionContainer = ({ word, top, left, handleBlur }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWordInfo(word));
	}, [word, dispatch]);

	const definitions = useSelector(definitionsSelector(word));

	useEffect(() => {
		const escapeListener = ({ key }) => {
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

export default DefinitionContainer;