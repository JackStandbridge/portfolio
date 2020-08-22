import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import { capitalize } from '../../lib/utils';

const GamePage = () => {

	const [Component, setComponent] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {

		(async () => {

			if (router.query.id) {
				try {
					const { id } = router.query;
					const name = capitalize(id).replace(' ', '');
					const component = await import(`../../components/${ name }`);
					setComponent(() => component);
				} catch (e) {
					setComponent(null);
				} finally {
					setLoading(false);
				}
			}

		})();

	}, [router.query.id]);

	return loading ? null :
		!Component ? <DefaultErrorPage statusCode={ 404 } />
		: Component.default();
};

export default GamePage;