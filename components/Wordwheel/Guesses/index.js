import { useState, useEffect, useCallback } from 'react';
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

	useEffect(() => {
		setShownDefinition(null);
	}, [answers, setShownDefinition, showAnswers, guesses]);

	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const ref = useCallback(node => {
		if (!node) {
			return;
		}

		const {
			x,
			y,
			width,
			height
		} = node.getBoundingClientRect();
		const top = y + height;
		const left = x + (width / 2);

		setTop(top);
		setLeft(left);

	});

	const handleBlur = () => {
		setShownDefinition(null);
	};

	return (
		<Guesses
			top={ top }
			left={ left }
			words={ words }
			selectedRef={ ref }
			handleBlur={ handleBlur }
			handleClick={ handleClick }
			shownDefinition={ shownDefinition }
		/>
	);
};

export default GuessesContainer;