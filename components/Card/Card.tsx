import { FC } from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

interface Props {
	title: string,
	imgUrl: string,
	link: string,
	blurb: string[],
	index: number,
}

const Card: FC<Props> = ({ title, imgUrl, link, blurb }) => {
	return (
		<article className={ styles.card }>

			<div className={ styles.info }>
				<h2>
					<Link scroll={ false } href={ link }>
						<a className={ styles.title }>
							{ title }
						</a>
					</Link>
				</h2>
				{ blurb.map((p, i) => (
					<p key={ i }>{ p }</p>
				)) }
			</div>

			<Link href={ link }>
				<a className={ styles.link }>
					<img
						src={ imgUrl }
						alt={ `preview of ${ title }` }
						className={ styles.image }
					/>
				</a>
			</Link>
		</article>
	);
};

export default Card;