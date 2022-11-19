import { State } from '../../store';
import { Duration, NoteName } from './types';

export const durationSelector = (state: State): Duration[] =>
	state.sightreading.durations;

export const maxIntervalSelector = (state: State): number | '' =>
	state.sightreading.maxInterval;

export const rangeSelector = (state: State): [NoteName, NoteName] =>
	state.sightreading.range;

export const showNoteNameSelector = (state: State): boolean =>
	state.sightreading.showNoteNames;
