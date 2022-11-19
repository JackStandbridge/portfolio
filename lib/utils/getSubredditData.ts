import { SubredditListing } from '../../components/Reddit/interfaces';
import { GetServerSideProps } from 'next';
import attachGalleryImages from './attachGalleryImages';
import attachImgurImage from './attachImgurImage';

const getSubredditData: GetServerSideProps = async (context) => {
	const { sub } = context.query;
	try {
		const request = await fetch(`https://reddit.com/r/${sub}.json`);

		const response = await request.json();
		const data = response.data as SubredditListing;

		data.children = await Promise.all(
			data.children.map(async (child) => {
				const url = child.data.url;

				const isImgur = /imgur/i.test(url);
				const noPreview = !/(\.(gif|jpe?g|tiff?|png|webp|bmp)$)/i.test(url);
				if (isImgur && noPreview) {
					child.data = await attachImgurImage(child.data);
				}
				const isGallery = child.data.is_gallery;

				if (isGallery) {
					child.data = await attachGalleryImages(child.data);
				}

				const isVideo = child.data.is_video;
				if (isVideo) {
					try {
						const response = await fetch(child.data.url + '/DASH_audio.mp4');
						const hasAudio = response.status < 300;

						child.data.has_audio = hasAudio;
					} catch {
						child.data.has_audio = false;
					}
				}

				return child;
			})
		);

		return { props: { sub, data } };
	} catch {
		return { props: { sub, data: {} } };
	}
};

export default getSubredditData;
