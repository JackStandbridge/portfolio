import { Duration, NoteName } from './types';

export interface State {
	durations: Duration[],
	maxInterval: number,
	range: [NoteName, NoteName],
};

const initial: State = {
	durations: [2, 4],
	maxInterval: 1,
	range: ['E4', 'G4'],
};

export default initial;