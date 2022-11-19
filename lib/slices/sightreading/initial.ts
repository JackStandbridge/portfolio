import { Duration, NoteName } from './types';

export interface State {
	durations: Duration[];
	maxInterval: number | '';
	range: [NoteName, NoteName];
	showNoteNames: boolean;
}

const initial: State = {
	durations: [2, 4],
	maxInterval: 3,
	range: ['E4', 'F5'],
	showNoteNames: false,
};

export default initial;
