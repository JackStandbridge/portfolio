import Link from 'next/link';

const Card = ({ title, img, link }) => {
	return (
		<Link href={ link }>
			<a>
				<article>
					<h2>{ title }</h2>
					<img src={ img } alt='' />
				</article>
			</a>
		</Link>
	);
};

export default Card;