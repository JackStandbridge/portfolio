import { FC } from 'react';

import styles from './CommentLink.module.scss';

interface Props {
	numComments: number;
	url: string;
}

const CommentLink = ({ numComments, url }: Props) => {
	return (
		<a className={styles.commentLink} href={url}>
			<svg
				className={styles.icon}
				id='Layer_1'
				enableBackground='new 0 0 512 512'
				viewBox='0 0 512 512'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g>
					<path d='m309.333 341.333c29.419 0 53.333-23.936 53.333-53.333v-192c0-29.397-23.915-53.333-53.333-53.333h-256c-29.418 0-53.333 23.936-53.333 53.333v192c0 29.397 23.915 53.333 53.333 53.333h32v53.333c0 4.032 2.283 7.723 5.888 9.536 1.493.747 3.136 1.131 4.779 1.131 2.261 0 4.523-.725 6.4-2.133l82.496-61.867z' />
					<path d='m458.667 106.667h-64c-5.888 0-10.667 4.779-10.667 10.667v170.666c0 41.173-33.493 74.667-74.667 74.667h-113.77c-2.304 0-4.565.747-6.4 2.133l-17.685 13.269c-2.731 2.048-4.309 5.248-4.267 8.64.043 3.392 1.685 6.571 4.459 8.555 9.173 6.592 19.904 10.069 30.997 10.069h124.437l82.496 61.867c1.877 1.408 4.117 2.133 6.4 2.133 1.621 0 3.264-.384 4.779-1.131 3.605-1.813 5.888-5.504 5.888-9.536v-53.333h32c29.418 0 53.333-23.936 53.333-53.333v-192c0-29.397-23.915-53.333-53.333-53.333z' />
				</g>
			</svg>
			{numComments}
		</a>
	);
};

export default CommentLink;
