import { ListingItem } from '../../components/Reddit/interfaces';

const extensions = [
	'jpg',
	'jpeg',
	'png',
	'gif',
	'webp',
	'tif',
	'tiff',
	'bmp'
];

const attachImgurImage = async (data: ListingItem) => {
		// There is work to do, so try adding all the extensions to the url
		// and send a request to each new url to see if it comes back with a 200 code
		const promises = await Promise.all(
			extensions.map(ext => fetch(`${ data.url }.${ ext }`))
		);

		// Just get the first match. Imgur often has multiple versions available
		const accessibleImage = promises.find(promise => promise.status < 300);

		// Overwrite the current url if possible
		data.url = accessibleImage?.url ?? data.url;

		return data;
};

export default attachImgurImage;