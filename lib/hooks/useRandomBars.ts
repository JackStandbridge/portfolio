import { useSelector, shallowEqual } from 'react-redux';
import { useState, useEffect } from 'react';
import { NoteDefinition, NoteName, Duration, notes } from '../slices/sightreading/types';
import { randomEntry, bounceWithinBounds } from '../utils';
import { durationSelector, maxIntervalSelector, rangeSelector } from '../slices/sightreading/selectors';

export interface Bar {
	voices: NoteDefinition[][],
};

interface ConfigurationOptions {
	durations: Duration[],
	maxInterval: number,
	noteRange: [NoteName, NoteName],
};

const durationFrequency = {
	1: 0.15,
	2: 0.35,
	4: 0.65,
	8: 0.9,
	16: 1,
};

let previousNoteIndex: number = -1;

const getNote = ({ durations, maxInterval, noteRange }: ConfigurationOptions): NoteDefinition[] => {
	const randomNumber = Math.random();
	const frequency = durationFrequency[durations[0]];
	const shouldSplit = randomNumber > frequency && durations.length > 1;
	const notesArray = (Object.keys(notes) as NoteName[]).slice();
	const [lowestNote, highestNote] = noteRange;
	const permittedNotes = notesArray.slice(notesArray.indexOf(lowestNote), notesArray.indexOf(highestNote) + 1);

	if (shouldSplit) {
		const newDurations = [...durations];
		const largestDuration = newDurations.shift();
		const nextLargestDuration = newDurations[0];
		const remainingIterations = nextLargestDuration / (<number>largestDuration);

		const options = { durations: newDurations, maxInterval, noteRange };

		const result = <NoteDefinition[]>[];

		for (let i = 0; i < remainingIterations; i += 1) {
			result.push(...getNote(options));
		}

		return result;

	} else if (previousNoteIndex === -1) {
		const selectedDuration = durations[0];
		const note = randomEntry(permittedNotes);

		previousNoteIndex = permittedNotes.indexOf(note);

		return [[note, selectedDuration]];

	} else {
		const selectedDuration = durations[0];

		const deviation = Math.floor((Math.random() * (maxInterval * 2 + 1)) - maxInterval);

		const newIndex = bounceWithinBounds(0, permittedNotes.length - 1, previousNoteIndex + deviation);

		previousNoteIndex = newIndex;

		return [[permittedNotes[newIndex], selectedDuration]];
	}
};


const generateBar = (options: ConfigurationOptions): Bar => {
	const voice = [];

	const timesToLoop = Math.min(...options.durations);

	for (let i = 0; i < timesToLoop; i += 1) {
		const notes = getNote(options);
		voice.push(...notes);
	}

	return {
		voices: [voice]
	};
}

interface BarsConfig {
	timesignature: [number, number],
}

interface RandomBars {
	bars: Bar[],
	generateBars: () => void,
};

const useRandomBars = ({
	// timesignature,
}: BarsConfig): RandomBars => {

	const durations = useSelector(durationSelector, shallowEqual);
	const maxInterval = useSelector(maxIntervalSelector);
	const noteRange = useSelector(rangeSelector, shallowEqual);

	const [bars, setBars] = useState<Bar[]>([]);

	const generateBars = () => {
		const newBars = <Bar[]>[];

		for (let i = 0; i < 24; i++) {
			newBars.push(generateBar({ durations, maxInterval, noteRange }));
		}
		setBars(newBars);
	};

	useEffect(generateBars, [durations, maxInterval, noteRange]);

	return { bars, generateBars };
};

export default useRandomBars;