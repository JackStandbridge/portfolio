const getTime = () => {
	if (typeof performance !== 'undefined') {
		return performance.now();
	} else {
		return +new Date();
	}
};

const throttle = (fn: (...args: any) => any) => {
	let last = getTime();

	return (...args: any) => {
		if (last < getTime() - 100) {
			fn(...args);
		}

		last = getTime();
	};
};

export default throttle;
