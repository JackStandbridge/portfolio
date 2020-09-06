const capitalize = str => str
	.split(/[-\s]/)
	.map(word => word[0].toUpperCase() + word.slice(1,))
	.join(' ');

export default capitalize;