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

				let __html = Marked.parse(text)

				__html = __html
					.replace(
						/<p>&gt;(.*)?<\/p>/ig,
						(_, content) => {
							return `<p><blockquote>${ content.replace('<p>&gt;', '<p>') }</blockquote></p>`;
						}
					)
					.replace(
						/(&gt;(.*)?<\/p>)/igs,
						(_, content) => {
							if (content) {
								return `<p><blockquote>${ content.replace(/&gt;\s?/g, '') }</blockquote></p>`;
							} else {
								return '';
							}
						}
					)
					.replace(
						/<\/blockquote><\/p>[\n\s]+<p><blockquote>/igs,
						''
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