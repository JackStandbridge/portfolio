import { FC, useState, ChangeEventHandler } from 'react';

import Html from '../Html';
import CommentChain from '../CommentChain';
import styles from './CommentPage.module.scss';

import { SubredditListing, Comment } from '../interfaces';

type Props = {
	self: SubredditListing;
	comments: {
		children: Comment[];
	};
	host: string;
};

const CommentPage: FC<Props> = ({ self, comments, host }) => {
	const { title, selftext, url } = self.children[0].data;

	const sortingFns = {
		top: (a: Comment, b: Comment) => {
			if (a.data.score > b.data.score) {
				return -1;
			} else if (b.data.score > a.data.score) {
				return 1;
			} else {
				return 0;
			}
		},
		new: (a: Comment, b: Comment) => {
			if (a.data.created > b.data.created) {
				return -1;
			} else if (b.data.created > a.data.created) {
				return 1;
			} else {
				return 0;
			}
		},
	} as const;

	type SortingFn = keyof typeof sortingFns;
	const fnNames = Object.keys(sortingFns) as SortingFn[];

	const [sortBy, setSortBy] = useState<SortingFn>('top');

	const handleSort: ChangeEventHandler<HTMLSelectElement> = (e) => {
		setSortBy(e.currentTarget.value as SortingFn);
	};

	const sortingFn = sortingFns[sortBy];
	const children = comments.children.sort(sortingFn);

	return (
		<main className={styles.page}>
			<h1 className={styles.title}>
				<a href={url}>{title}</a>
			</h1>
			<Html text={selftext} />
			<label className={styles.sorting}>
				Sorty by:&nbsp;
				<select onChange={handleSort}>
					{fnNames.map((fnName: SortingFn, i) => (
						<option key={i} value={fnName}>
							{fnName[0].toUpperCase() + fnName.slice(1)}
						</option>
					))}
				</select>
			</label>

			<>
				{children.map((comment, i) => (
					<CommentChain
						sortingFn={sortingFn}
						key={i}
						comment={comment}
						host={host}
					/>
				))}
			</>
		</main>
	);
};

export default CommentPage;
