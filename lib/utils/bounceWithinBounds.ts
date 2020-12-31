const bounceWithinBounds = (min: number, max: number, newNum: number): number => {

	let result = newNum;

	while (result > max || result < min) {
		if (result < min) {
			result = min + (min - result);
		} else if (result > max) {
			result = max - (result - max);
		}
	}
	return result;

};

export default bounceWithinBounds;