import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import CommentPage from '../../../../../../../components/Reddit/CommentPage';
import HostContext from '../../../../../../../components/Reddit/context';

import {
	SubredditListing,
	Comment,
} from '../../../../../../../components/Reddit/interfaces';

interface Props {
	self: SubredditListing;
	comments: {
		children: Comment[];
	};
	host: string;
	sub: string;
	title: string;
}

const Page: FC<Props> = (props) => {
	return (
		<HostContext.Provider value={props.host}>
			<Head>
				<title>
					{props.sub} | {props.self.children[0].data.title}
				</title>
			</Head>
			<CommentPage {...props} />
		</HostContext.Provider>
	);
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id, title, sub } = context.query;

	const { host } = context.req.headers;

	const request = await fetch(
		`https://old.reddit.com/r/${sub}/comments/${id}/${title}.json`
	);

	const response = await request.json();
	const [{ data: self }, { data: comments }] = response;

	return { props: { sub, self, title, comments, host } };
};
