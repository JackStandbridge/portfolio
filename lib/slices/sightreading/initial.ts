import { Duration, NoteName } from './types';

export interface State {
	durations: Duration[],
	maxInterval: number,
	range: [NoteName, NoteName],
};

const initial: State = {
	durations: [2, 4],
	maxInterval: 3,
	range: ['E4', 'F5'],
};

export default initial;