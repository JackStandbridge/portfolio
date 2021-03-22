import { FC } from 'react';

import Html from '../Html';

import { Comment } from '../interfaces';
import styles from './CommentChain.module.scss';

interface Props {
	comment: Comment,
	host: string,
};

const CommentChain: FC<Props> = ({ comment, host }) => {
	const { body = '', replies } = comment.data;

	return !body ? null : (
		<div className={ styles.comment }>
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