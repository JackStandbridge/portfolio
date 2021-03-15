import { GetServerSideProps } from 'next';

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

export { default } from '../../../../../../../components/Reddit/CommentPage';