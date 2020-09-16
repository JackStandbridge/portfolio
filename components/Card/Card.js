import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({ title, img, link }) => {
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