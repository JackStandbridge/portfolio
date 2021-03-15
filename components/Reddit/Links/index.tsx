import { FC } from 'react';

import { ListingItem } from '../interfaces';

import styles from './Links.module.scss';

interface Props {
	links: {
		data: ListingItem
	}[]
}

const Links: FC<Props> = ({ links }) => {
	return (
		<ul className={ styles.list }>
			{
				links.map(({
					data: {
						title,
						url,
						id,
						domain,
						permalink,
						num_comments,
					}
				}) => {

					const isSelfPost = /^self\./.test(domain);

					const internalUrl = '/reddit' + permalink;
					const externalUrl = url;

					return (
						<li
							className={ styles.item }
							key={ id }
						>
							<a
								className={ styles.commentLink }
								href={ internalUrl }
							>
								{ num_comments } Comment{ num_comments !== 1 ? 's' : '' }
							</a>
							<a
								className={ styles.title }
								href={ isSelfPost ? internalUrl : externalUrl }>
								{ title }
							</a>
						</li>
					)
				})
			}
		</ul>
	);
};


export default Links;