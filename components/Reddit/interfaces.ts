export type ListingItem = {
	title: string;
	subreddit: string;
	is_self: boolean;
	is_video: boolean;
	is_gallery: boolean;
	url: string;
	id: string;
	permalink: string;
	selftext: string;
	num_comments: number;
	thumbnail: string;
	has_audio?: boolean;
	gallery_data?: {
		items: {
			media_id: string;
			id: number;
			url: string;
		}[];
	};
};

export type Comment = {
	data: {
		body: string;
		replies?: {
			data?: {
				children: Comment[];
			};
		};
		score: number;
		author: string;
		created: number;
	};
};

export type SubredditListing = {
	children: {
		data: ListingItem;
	}[];
};
