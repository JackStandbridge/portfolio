import { FC } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import SelfText from '../SelfText';
import Preview from '../Preview';
import Html from '../Html';
import CommentLink from '../CommentLink';

import { ListingItem } from '../interfaces';
import styles from './Link.module.scss';
import HostContext from '../context';

interface Props {
	data: ListingItem,
};

const Link: FC<Props> = ({ data }) => {
	const {
		title,
		subreddit,
		url,
		permalink,
		num_comments,
		selftext,
		is_self,
		is_gallery,
		gallery_data,
		has_audio: hasAudio,
	} = data;

	const router = useRouter();
	const sub = Array.isArray(router.query.sub) ? router.query.sub[0] : router.query.sub ?? '';
	const isCrossPost = subreddit.toLocaleLowerCase() !== sub.toLowerCase();

	const hasPreview = /(\.(gif|jpe?g|tiff?|png|webp|bmp)$)|(i|v)\.redd\.it/i
		.test(url);

	const internalUrl = '/reddit' + permalink;
	const externalUrl = url;

	return (
		<li className={ styles.item }>
			<div className={ styles.left }>
				<NextLink
					href={ is_self ? internalUrl : externalUrl }
				>
					<a
						className={ styles.title }
					>
						<Html text={ title } />
					</a>
				</NextLink>

				{ isCrossPost &&
					<HostContext.Consumer>
						{ value => (
							<NextLink
								href={ `${ value }/reddit/r/${ subreddit }` }
							>
								<a
									className={ styles.sub }
								>
									<Html text={ `/r/${ subreddit }` } />
								</a>
							</NextLink>
						) }
					</HostContext.Consumer>
				}

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