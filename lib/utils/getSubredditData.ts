import { SubredditListing } from '../../components/Reddit/interfaces';
import { GetServerSideProps } from 'next';

const extensions = [
	'webp',
	'png',
	'jpg',
	'jpeg',
	'gif',
	'tif',
	'tiff',
	'bmp'
];

const getSubredditData: GetServerSideProps = async (context) => {

	const request = await fetch(`https://reddit.com/r/${ context.query.sub }.json`);

	const { sub } = context.query;
	const response = await request.json();
	const data = response.data as SubredditListing;

	// Would like to transform plain imgur links into a link to the image itself
	// so map over all the links and check if this is necessary or possible
	data.children = await Promise.all(data.children.map(async child => {
		const url = child.data.url
		// Check if it's an imgur url with no preview so we know if there's work to do
		const isImgur = /imgur/i.test(url);
		const noPreview = !/(\.(gif|jpe?g|tiff?|png|webp|bmp)$)/i.test(url);

		if (isImgur && noPreview) {
			// There is work to do, so try adding all the extensions to the url
			// and send a request to each new url to see if it comes back with a 200 code
			const promises = await Promise.all(
				extensions.map(ext => fetch(`${ url }.${ ext }`))
			);

			// Just get the first match. Imgur often has multiple versions available
			const accessibleImage = promises.find(promise => promise.status < 300);

			// Overwrite the current url if possible
			child.data.url = accessibleImage?.url ?? child.data.url;
		}

		return child;
	}));

	return { props: { sub, data } };
};

export default getSubredditData;