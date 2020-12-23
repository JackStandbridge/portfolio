import { useSelector, shallowEqual } from 'react-redux';
import { useState, useEffect } from 'react';
import { NoteDefinition, NoteName, Duration, notes } from '../slices/sightreading/types';
import { randomEntry } from '../utils';
import { durationSelector } from '../slices/sightreading/selectors';

export interface iBar {
	voices: NoteDefinition[][],
};

interface RandomBars {
	bars: iBar[],
};

interface DurationConfig {
	durations: Duration[],
};

const durationFrequency = {
	1: 0.15,
	2: 0.35,
	4: 0.65,
	8: 0.9,
	16: 1,
};

const getNote = ({ durations }: DurationConfig): NoteDefinition[] => {
	const randomNumber = Math.random();
	const frequency = durationFrequency[durations[0]];
	const shouldSplit = randomNumber > frequency && durations.length > 1;

	if (shouldSplit) {
		const newDurations = [...durations];
		const largestDuration = newDurations.shift();
		const nextLargestDuration = newDurations[0];
		const remainingIterations = nextLargestDuration / (<number>largestDuration);

		const options = { durations: newDurations };

		const result = [];

		for (let i = 0; i < remainingIterations; i += 1) {
			result.push(...getNote(options));
		}

		return result;

	} else {
		const selectedDuration = durations[0];
		return [[randomEntry(Object.keys(notes) as NoteName[]), selectedDuration]];
	}
};


const generateBar = (options: DurationConfig): iBar => {
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

const useRandomBars = ({
	// timesignature,
}: BarsConfig): RandomBars => {

	const durations = useSelector(durationSelector, shallowEqual);

	const [bars, setBars] = useState<iBar[]>([]);

	useEffect(() => {
		const newBars = [];
		for (let i = 0; i < 24; i++) {
			newBars.push(generateBar({ durations }));
		}
		setBars(newBars);
	}, [durations]);

	return { bars };
};

export default useRandomBars;