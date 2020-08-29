import { useState } from 'react';
import { useSelector } from 'react-redux'

import Guesses from './Guesses';

import {
	guessesSelector,
	answersSelector,
	showAnswersSelector
} from '../../../lib/slices/wordwheel/selectors';

const GuessesContainer = () => {

	const guesses = useSelector(guessesSelector);
	const answers = useSelector(answersSelector);
	const showAnswers = useSelector(showAnswersSelector);

	const guessObjects = guesses
		.map(word => ({ word, guessedByUser: true }));

	const answerObjects = !showAnswers ? [] : answers
		.filter(word => !guesses.includes(word))
		.map(word => ({ word, guessedByUser: false }));

	const words = [...guessObjects, ...answerObjects]
		.sort((a, b) => a.word > b.word ? 1 : -1)
		.reduce((dictionary, guess) => {
			const id = guess.word[0].toLowerCase();

			if (dictionary[id] === undefined) {
				dictionary[id] = {
					id,
					words: [],
				};
			}

			dictionary[id].words.push(guess);

			return dictionary;

		}, {});

	const [shownDefinition, setShownDefinition] = useState(null);

	const handleClick = word => {
		const newWord = shownDefinition === word ? null : word;
		setShownDefinition(newWord);
	};

	return (
		<Guesses
			words={ words }
			handleClick={ handleClick }
			shownDefinition={ shownDefinition }
		/>
	);
};

export default GuessesContainer;