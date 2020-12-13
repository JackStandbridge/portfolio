import { FC } from 'react';
import styles from './Loading.module.scss';

interface Props {
	colour?: string
}

const Loading: FC<Props> = ({ colour }) => <div className={ styles[colour ?? 'loading'] }/>

export default Loading;