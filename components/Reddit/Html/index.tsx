import { FC } from 'react';
import { Marked } from '@ts-stack/markdown';

import styles from './Html.module.scss';

import HostContext from '../context';

interface Props {
	text: string
};

const Html: FC<Props> = ({ text }) => {

	return (
		<HostContext.Consumer>
			{ host => {

				const base = host + '/reddit';

				const __html = Marked.parse(text)
					.replace(
						/<p>&gt;(.*)?<\/p>/ig,
						(_, content) => {
							return `<p><blockquote>${ content }</blockquote></p>`;
						}
					)
					.replace(
						'&amp;',
						'&'
					)
					.replace(/https?:\/\/w?w?w?\.?reddit\.com/g, base);

				return (
					<div className={ styles.parsedContent } dangerouslySetInnerHTML={ { __html } } />
				)
			} }
		</HostContext.Consumer>
	);
};

export default Html;