import { State } from '../initial';

const stopPlaying = (state: State): void => {
	state.playing = false;
};

export default stopPlaying;
