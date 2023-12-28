import { FC, ReactNode } from 'react';
import { useLocalStorage } from '../../lib/hooks';

const LocalStorage = ({ children }: { children: ReactNode }) => {
	useLocalStorage();

	return <>{children}</>;
};

export default LocalStorage;
