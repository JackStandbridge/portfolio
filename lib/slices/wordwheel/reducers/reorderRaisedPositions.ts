import { State } from '../initial';

const reorderRaisedPositions = (state: State): void => {
	// reset the raised positions so that removed
	// letters don't leave a gap
	state.letters.ids
		// get all selected letters
		.filter(id => {
			return state.letters.entities[id].selected;
		})

		.map(id => state.letters.entities[id])

		// sort them by their raised position
		.sort((a, b) => {
			if (a.raisedPosition === null) {
				return 1;
			}
			if (b.raisedPosition === null) {
				return -1
			}

			return a.raisedPosition > b.raisedPosition ? 1 : -1
		})

		// rewrite their raise positons to start from 0 increasing
		.forEach((letter, i) => {
			letter.raisedPosition = i;
		});

};

export default reorderRaisedPositions;