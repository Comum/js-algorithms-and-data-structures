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

// More examples

function areThereDuplicates(...args) {
	if (!args.length) {
		return false;
	}

	args.sort((a, b) => a > b);

	let start = 0;
	let next = 1;

	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}

	return false;
}

function areThereDuplicatesSet() {
	return new Set(arguments).size !== arguments.length;
}

function averagePair(arr, average) {
	if (!arr.length) {
		return false;
	}

	let beginPointer = 0;
	let endPointer = arr.length - 1;

	while (beginPointer < endPointer) {
		const averageTemp = (arr[beginPointer] + arr[endPointer]) / 2;

		if (averageTemp < average) {
			beginPointer++;
		} else if (averageTemp > average) {
			endPointer--;
		} else if (averageTemp === average) {
			return true;
		}
	}

	return false;
}

function isSubsequence(str1, str2) {
	if (!str1) {
		return true;
	}

	if (str2.length < str1.length) {
		return false;
	}

	let i = 0;

	for (let j = 0; j < str2.length; j++) {
		if (str2[j] === str1[i]) {
			i++;
		}

		if (i === str1.length) {
			return true;
		}
	}

	return false;
}

function isSubsequenceRecursive(str1, str2) {
	if (str1.length === 0) {
		return true;
	}

	if (str2.length === 0) {
		return false;
	}

	if (str2[0] === str1[0]) {
		return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
	}

	return isSubsequenceRecursive(str1, str2.slice(1));
}

module.exports = {
	sumZero: sumZero,
	countUniqueValuesByValue: countUniqueValuesByValue,
	countUniqueValues: countUniqueValues,
	areThereDuplicates: areThereDuplicates,
	areThereDuplicatesSet: areThereDuplicatesSet,
	averagePair: averagePair,
	isSubsequence: isSubsequence,
	isSubsequenceRecursive: isSubsequenceRecursive,
};
