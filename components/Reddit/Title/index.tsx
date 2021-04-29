import {
	useState,
	ChangeEventHandler,
	FocusEventHandler,
	KeyboardEventHandler
} from 'react';
import { useRouter } from 'next/router';

import Title from './Title';

interface Props {
	text: string,
};

const ConnectedTitle = ({ text }: Props): JSX.Element => {
	const [input, setInput] = useState(text);

	const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
		setInput(e.currentTarget.value);
	};

	const router = useRouter();

	const handleNavigate = () => {
		router.push(input);
	};

	const handleBlur: FocusEventHandler = () => {
		handleNavigate();
	};

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			handleNavigate();
		}
	};

	return (
		<Title
			handleKeyDown={ handleKeyDown }
			handleBlur={ handleBlur }
			handleChange={ handleChange }
			text={ input }
		/>
	);
};

export default ConnectedTitle;