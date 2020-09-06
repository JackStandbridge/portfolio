const clamp = (min, max, num) => {
	if (num > max) {
		return max;
	} else if (num < min) {
		return min;
	} else {
		return num;
	}
};

export default clamp;