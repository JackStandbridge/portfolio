import styles from './Loading.module.scss';

const Loading = ({ colour }) => <div className={ styles[colour ?? 'loading'] }/>

export default Loading;