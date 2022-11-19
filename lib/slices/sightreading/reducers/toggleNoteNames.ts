import { State } from '../initial';

const toggleNoteNames = (state: State): void => {
	state.showNoteNames = !state.showNoteNames;
};

export default toggleNoteNames;
