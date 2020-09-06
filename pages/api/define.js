import dummyData from './dummyData.json';

const error = ({ res, error = 'Not found', code = 404 }) => {
	res.statusCode === code;
	res.json({ error });
};

const define = async (req, res) => {
	try {

		const word = req.query.q;

		if (!word) {
			throw new Error();
		}

		// const base = process.env.DICTIONARY_API_BASE;

		// const response = await fetch(`${ base }${ word }`);
		// const result = await response.json();

		// if (response.status >= 400 || !Array.isArray(result)) {
		// 	throw new Error();
		// }

		const result = dummyData;

		res.statusCode = 200;
		res.json({ word, result });

	} catch (e) {
		return error({
			res,
			error: 'Not found',
			code: 404,
		});
	}

};

export default define;