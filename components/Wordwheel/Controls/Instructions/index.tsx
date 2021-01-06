import { FC, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFirstVisit } from '../../../../lib/slices/wordwheel/reducer';
import { firstVisitSelector } from '../../../../lib/slices/wordwheel/selectors';

import Instructions from './Instructions';

const ConnectedInstructions: FC = () => {
	const firstVisit = useSelector(firstVisitSelector);

	const [showModal, setShowModal] = useState(firstVisit);

	useEffect(() => {
		if (firstVisit) {
			setShowModal(true);
		}
	}, [setShowModal, firstVisit])

	const handleClick = useCallback(() => {
		setShowModal(showModal => !showModal);
	}, [setShowModal]);

	const dispatch = useDispatch();

	const handleClose = () => {
		setShowModal(false);
		dispatch(setFirstVisit(false));
	};

	useEffect(() => {
		const keyListener = (e: KeyboardEvent): void => {
			if (e.key.length === 1) {
				setShowModal(false);
			}
		};

		document.addEventListener('keydown', keyListener);

		return (): void => {
			document.removeEventListener('keydown', keyListener);
		};

	}, [setShowModal]);

	const buttonTitle = {
		start: '',
		keyLetter: 'I',
		end: 'nstructions',
	};

	return (
		<Instructions
			handleClick={ handleClick }
			handleClose={ handleClose }
			showModal={ showModal }
			buttonTitle={ buttonTitle }
		/>
	);
};

export default ConnectedInstructions;