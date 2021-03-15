import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {

	const request = await fetch(`https://reddit.com/r/${ context.query.sub }.json`);

	const { sub } = context.query;
	const response = await request.json();
	const data = response.data;

	return { props: { sub, data } };
};

export { default } from '../../../../components/Reddit';