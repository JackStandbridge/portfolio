import { MouseEventHandler, FC, useState, useRef } from 'react';

import Html from '../Html';

import { Comment } from '../interfaces';
import styles from './CommentChain.module.scss';

interface Props {
	comment: Comment,
	host: string,
};

const CommentChain: FC<Props> = ({ comment, host }) => {
	const { body = '', replies, score, author } = comment.data;

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
			ref={ ref }
			onDoubleClick={ handleClick }
			onMouseDown={ handleMouseDown }
			className={ styles.comment }
		>
			<span className={ styles.user }>{ author }</span>
			{ ' ' }&bull;{ ' ' }
			<span className={ styles.points }>{ score } point{ score !== 1 ? 's' : '' }</span>

			{ !expanded ? null : (
				<>
					<Html text={ body } />
					{ replies?.data?.children.map((child, i) => (
						<CommentChain key={ i } comment={ child } host={ host } />
					)) }
				</>
			) }
		</div>
	);
};

export default CommentChain;