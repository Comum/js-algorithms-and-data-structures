/**
 * Objective
 *
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the
 * value passed to the function is located. If the value is not found, return -1.
 */
function search(arr, value) {
	if (!arr.length) {
		return -1;
	}

	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		const middle = Math.floor((min + max) / 2);

		if (arr[middle] < value) {
			min = middle + 1;
		} else if (arr[middle] > value) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
}

module.exports = {
	search: search,
};
