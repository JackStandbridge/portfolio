import { State } from '../initial';

const startPlaying = (state: State): void => {
	state.playing = true;
};

export default startPlaying;