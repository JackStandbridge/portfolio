const clamp = (min: number, max: number, num: number): number => {
	if (num > max) {
		return max;
	} else if (num < min) {
		return min;
	} else {
		return num;
	}
};

export default clamp;
