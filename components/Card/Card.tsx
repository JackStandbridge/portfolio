import { FC } from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

interface Props {
	title: string;
	imgUrl: string;
	link: string;
	blurb: string[];
	index: number;
}

const Card = ({ title, imgUrl, link, blurb }: Props) => {
	return (
		<article className={styles.card}>
			<div className={styles.info}>
				<>
					<h2>
						<Link className={styles.title} scroll={false} href={link}>
							{title}
						</Link>
					</h2>
					{blurb.map((p, i) => (
						<p className={styles.p} key={i}>
							{p}
						</p>
					))}
				</>
			</div>

			<Link className={styles.link} href={link}>
				<img
					src={imgUrl}
					alt={`preview of ${title}`}
					className={styles.image}
				/>
			</Link>
		</article>
	);
};

export default Card;
