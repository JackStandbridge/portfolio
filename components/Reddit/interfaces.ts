export interface ListingItem {
	title: string,
	url: string,
	id: string,
	domain: string,
	permalink: string,
	selftext: string,
	num_comments: number,
};

export interface Comment {
	data: {
		body: string,
		replies: {
			data: {
				children: Comment[],
			},
		},
	}
};

export interface SubredditListing {
	children: {
		data: ListingItem,
	}[],
};