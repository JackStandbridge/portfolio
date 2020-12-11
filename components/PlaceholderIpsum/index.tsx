import { FC, useState, useCallback, useEffect } from 'react';
import PlaceholderIpsum from './PlaceholderIpsum';
import sentences from '../../lib/data/sentences.json';
import { clamp } from '../../lib/utils';

const ConnectedPlaceholderIpsum: FC = () => {
	const [numberOfSentences, setNumberOfSentences] = useState<number>(8);
	const [numberOfParagraphs, setNumberOfParagraphs] = useState<number>(3);

	const handleParagraphs = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumberOfParagraphs(clamp(1, Infinity, +e.currentTarget.value));
	};

	const handleSentences = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumberOfSentences(clamp(1, Infinity, +e.currentTarget.value));
	};

	const [output, setOutput] = useState<string[][]>([]);

	useEffect(() => {
		const result = Array(Math.abs(numberOfParagraphs)).fill('').map(() => {
			return Array(Math.abs(numberOfSentences)).fill('').map(() => {
				const index = Math.floor(Math.random() * sentences.length);
				return sentences[index];
			});
		});

		result[0][0] = sentences[0];

		setOutput(result);

	}, [setOutput, numberOfSentences, numberOfParagraphs]);

	const [buttonText, setButtonText] = useState('Copy');

	const handleCopy = useCallback(async () => {
		let html = '';
		html += output.map(paragraph => {
			return paragraph.join(' ');
		}).join('\n\n');

		try {
			await window.navigator.clipboard.writeText(html);
			setButtonText('Copied!');

		} catch (e) {
			setButtonText(
				'Your browser doesn\'t support copying to the clipboard'
			);

		} finally {
			setTimeout(() => setButtonText('Copy'), 6000);
		}

	}, [setButtonText, output]);

	return (
		<PlaceholderIpsum
			handleSentences={ handleSentences }
			handleParagraphs={ handleParagraphs }
			numberOfSentences={ numberOfSentences }
			numberOfParagraphs={ numberOfParagraphs }
			handleCopy={ handleCopy }
			output={ output }
			buttonText={ buttonText }
		/>
	);
};

export default ConnectedPlaceholderIpsum;