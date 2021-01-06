import { FC } from 'react';
import { useLocalStorage } from '../../lib/hooks';

const LocalStorage: FC = ({ children }) => {
	useLocalStorage();

	return <>{ children }</>;
};

export default LocalStorage;