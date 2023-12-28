import { MouseEventHandler, FC, useState, useRef } from 'react';

import Html from '../Html';

import { Comment } from '../interfaces';
import styles from './CommentChain.module.scss';

interface Props {
	comment: Comment;
	host: string;
	sortingFn: (a: Comment, b: Comment) => number;
}

const CommentChain = ({ comment, host, sortingFn }: Props) => {
	const { body = '', replies, score, author } = comment.data;
	const children = [...(replies?.data?.children ?? [])].sort(sortingFn);

	const ref = useRef<HTMLDivElement>(null);

	const [expanded, setExpanded] = useState(score > -2);

	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		e.stopPropagation();

		const target = e.target as HTMLElement;

		if (!target.matches('a')) {
			setExpanded(!expanded);
		}
	};

	const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
		if (e.detail > 1) {
			e.preventDefault();
		}
	};

	return !body ? null : (
		<div
			ref={ref}
			onDoubleClick={handleClick}
			onMouseDown={handleMouseDown}
			className={styles.comment}
		>
			<span className={styles.user}>{author}</span> &bull;{' '}
			<span className={styles.points}>
				{score} point{score !== 1 ? 's' : ''}
			</span>
			{!expanded ? null : (
				<>
					<Html text={body} />
					{children.map((child, i) => (
						<CommentChain
							key={i}
							comment={child}
							host={host}
							sortingFn={sortingFn}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default CommentChain;
