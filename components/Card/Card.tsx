import { FC } from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

interface Props {
	title: string
	img: string
	link: string
}

const Card: FC<Props> = ({ title, img, link }) => {
	return (
		<Link href={ link }>
			<a className={ styles.link }>
				<article className={ styles.card }>
					<h2>{ title }</h2>
					<img
						src={ img }
						alt={ `preview of ${ title }` }
						className={ styles.image }
					/>
				</article>
			</a>
		</Link>
	);
};

export default Card;