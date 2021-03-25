import { FC } from 'react';

import Html from '../Html';

import { Comment } from '../interfaces';
import styles from './CommentChain.module.scss';

interface Props {
	comment: Comment,
	host: string,
};

const CommentChain: FC<Props> = ({ comment, host }) => {
	const { body = '', replies, score, author } = comment.data;

	return !body || score < -2 ? null : (
		<div className={ styles.comment }>
			<span className={ styles.user }>{ author }</span>
			{ ' ' }&bull;{ ' ' }
			<span className={ styles.points }>{ score } point{ score !== 1 ? 's' : '' }</span>

			<Html text={ body } />
			<>
				{
					replies?.data?.children.map((child, i) => (
						<CommentChain key={ i } comment={ child } host={ host } />
					))
				}
			</>
		</div>
	);
};

export default CommentChain;