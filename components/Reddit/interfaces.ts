export type ListingItem = {
	title: string,
	url: string,
	id: string,
	domain: string,
	permalink: string,
	selftext: string,
	num_comments: number,
	thumbnail: string,
	gallery_data?: {
		items: {
			media_id: string,
			id: number,
		}[]
	}
};

export type Comment = {
	data: {
		body: string,
		replies: {
			data: {
				children: Comment[],
			},
		},
	}
};

export type SubredditListing = {
	children: {
		data: ListingItem,
	}[],
};