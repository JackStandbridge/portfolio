import { FC } from 'react';

import Html from '../Html';
import Title from '../Title';
import CommentChain from '../CommentChain';
import styles from './CommentPage.module.scss';

import { SubredditListing, Comment } from '../interfaces';

interface Props {
	self: SubredditListing,
	comments: {
		children: Comment[]
	}
	host: string,
};

const CommentPage: FC<Props> = ({ self, comments, host }) => {
	const { title, selftext } = self.children[0].data;

	return (
		<main className={ styles.page }>
			<Title text={ title } />
			<Html text={ selftext } />

			<>
				{ comments.children.map((comment, i) => (
					<CommentChain key={ i } comment={ comment } host={ host } />
				)) }
			</>
		</main>
	);
};

export default CommentPage;