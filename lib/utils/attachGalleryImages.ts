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

const attachGalleryImages = async (data: ListingItem) => {
	if (data.gallery_data) {
		const result = data.gallery_data.items.map(async (item) => {
			try {
				const promises = await Promise.all(
					extensions.map(ext => fetch(`https://i.redd.it/${ item.media_id }.${ ext }`))
				);

				const accessibleImage = promises.find(promise => promise.status < 300);

				item.url = accessibleImage?.url ?? '';
			} catch {
				if (!item.url) {
					item.url = '';
				}
			}
			return item;
		});

		data.gallery_data.items = await Promise.all(result);
	}

	return data;
};

export default attachGalleryImages;