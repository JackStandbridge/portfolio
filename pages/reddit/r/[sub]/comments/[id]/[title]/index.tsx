import { FC } from 'react';
import { GetServerSideProps } from 'next';

import CommentPage from '../../../../../../../components/Reddit/CommentPage';

import HostContext from '../../../../../../../components/Reddit/context';
import { SubredditListing, Comment } from '../../../../../../../components/Reddit/interfaces';

interface Props {
	self: SubredditListing,
	comments: {
		children: Comment[]
	}
	host: string,
};

const Page: FC<Props> = props => {
	return (
		<HostContext.Provider value={ props.host }>
			<CommentPage { ...props } />
		</HostContext.Provider>
	);
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {

	const {
		id,
		title,
		sub
	} = context.query;

	const { host } = context.req.headers;

	const request = await fetch(`https://reddit.com/r/${ sub }/comments/${ id }/${ title }.json`);

	const response = await request.json();
	const [{ data: self }, { data: comments }] = response;

	return { props: { self, comments, host } };
};