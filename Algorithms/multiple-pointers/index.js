/**
 * Objective
 *
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array  that includes both values that sum
 * to zero or undefined if a pair does not exist.
 */
function sumZero(arr) {
	if (arr[0] > 0) {
		return undefined;
	}

	let beginPointer = 0;
	let endPointer = arr.length - 1;

	while (beginPointer < endPointer) {
		let sum = arr[beginPointer] + arr[endPointer];

		if (sum === 0) {
			return [arr[beginPointer], arr[endPointer]];
		} else if (sum > 0) {
			endPointer--;
		} else if (sum < 0) {
			beginPointer++;
		}
	}
}

module.exports = {
	sumZero: sumZero,
};
