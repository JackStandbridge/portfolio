import { FC } from 'react';
import { Marked } from '@ts-stack/markdown';

import { Comment } from '../interfaces';
import styles from './CommentChain.module.scss';

interface Props {
	comment: Comment,
	host: string,
};

const CommentChain: FC<Props> = ({ comment, host }) => {
	const { body = '', replies } = comment.data;
	console.log(body);

	const base = host + '/reddit';

	const urlSwappedBody = body
		.replace(/https?:\/\/w?w?w?\.?reddit\.com/g, base);

	const markDownProccessedBody = Marked.parse(urlSwappedBody);

	return (
		<div className={ styles.comment }>
			<div dangerouslySetInnerHTML={ { __html: markDownProccessedBody } } />
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