import { useState, useEffect } from 'react';
import { NoteDefinition, NoteName, Duration, notes } from '../../components/SightReading/types';
import { randomEntry } from '../utils';

type Bar = {
	voices: NoteDefinition[][],
}

type RandomBars = {
	bars: Bar[],
	fetchMoreBars: () => void,
}

const getNote = (space: Duration): NoteDefinition[] => {
	const shouldSplit = Math.random() > 0.3 && +space < 8;

	if (shouldSplit) {
		return [
			...getNote(`${+space * 2}` as Duration),
			...getNote(`${+space * 2}` as Duration),
		]
	} else {
		return [[randomEntry(Object.keys(notes) as NoteName[]), space]];
	}
};

const generateBar = (): Bar => {

	const voices = [
		[...getNote('1')]
	];

	return { voices };
}

const useRandomBars = (timesignature: [number, number]): RandomBars => {

	const [bars, setBars] = useState<Bar[]>([]);

	const fetchMoreBars = () => {
		setBars([...bars, generateBar()]);
	};

	useEffect(() => {
		setBars([generateBar()]);
	}, []);

	return {
		bars,
		fetchMoreBars
	};
};

export default useRandomBars;