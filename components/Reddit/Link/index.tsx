import { FC } from 'react';

import SelfText from '../SelfText';
import Preview from '../Preview';
import Html from '../Html';
import CommentLink from '../CommentLink';

import { ListingItem } from '../interfaces';
import styles from './Link.module.scss';

interface Props {
	data: ListingItem
};

const Link: FC<Props> = ({ data }) => {
	const {
		title,
		url,
		permalink,
		num_comments,
		selftext,
		is_self,
		is_gallery,
		gallery_data,
		has_audio: hasAudio,
	} = data;

	const hasPreview = /(\.(gif|jpe?g|tiff?|png|webp|bmp)$)|(i|v)\.redd\.it/i
		.test(url);

	const internalUrl = '/reddit' + permalink;
	const externalUrl = url;

	return (
		<li className={ styles.item }>
			<div className={ styles.left }>
				<a
					className={ styles.title }
					href={ is_self ? internalUrl : externalUrl }
				>
					<Html text={ title } />
				</a>
				{
					is_self &&
					<SelfText text={ selftext } />
				}
				{
					hasPreview &&
					<Preview urls={ [{ url, hasAudio }] } />
				}
				{
					is_gallery && gallery_data &&
					<Preview
						urls={ gallery_data.items.map(({ url }) => ({ url })) }
					/>
				}
			</div>

			<CommentLink url={ internalUrl } numComments={ num_comments } />

		</li>
	);
};

export default Link;