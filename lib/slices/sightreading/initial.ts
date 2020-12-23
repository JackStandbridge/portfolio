import { Duration } from './types';

export interface State {
	durations: Duration[],
};

const initial: State = {
	durations: [2, 8],
};

export default initial;