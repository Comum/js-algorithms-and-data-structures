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

/**
 * Objective
 *
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 */
function countUniqueValuesByValue(arr) {
	// this method does not alter the array
	if (arr.length === 0) {
		return 0;
	}

	let counter = 1;
	let value = arr[0];

	for (let num of arr) {
		if (value !== num) {
			counter++;
			value = num;
		}
	}

	return counter;
}

function countUniqueValues(arr) {
	// this method alters the array
	if (arr.length === 0) {
		return 0;
	}

	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return ++i;
}

module.exports = {
	sumZero: sumZero,
	countUniqueValuesByValue: countUniqueValuesByValue,
	countUniqueValues: countUniqueValues,
};
