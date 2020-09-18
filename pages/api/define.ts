import { NextApiRequest, NextApiResponse } from 'next';

import '../../lib/database';
import Definition from '../../lib/models/Definition';

const define = async (req: NextApiRequest, res: NextApiResponse) => {
	const word = req.query.q;

	try {

		if (!word) {
			throw new Error();
		}

		const results = await Definition.find({ word });
		let result = results[0];

		if (!result) {
			const base = process.env.DICTIONARY_API_BASE;

			const response = await fetch(`${ base }${ word }`);
			const json = await response.json();

			if (response.status >= 400 || !Array.isArray(json)) {
				throw new Error();
			}

			result = await new Definition({
				word,
				definitions: json,
			}).save();
		}

		res.statusCode = 200;
		res.json({ word, result: result.definitions });

	} catch (e) {
		if (word) {
			new Definition({
				word,
				definitions: null,
			}).save();
		}

		res.statusCode === 404;
		res.json({
			word: '',
			result: null,
		});

		return;
	}

};

export default define;