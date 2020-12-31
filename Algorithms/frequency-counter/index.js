/**
 * Objective
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
 * formed from iceman. Not case sensitive.
 */
function isAnagram(arr1, arr2) {
	// method with 2 loops
	if (arr1.length !== arr2.length) {
		return false;
	}

	let obj1 = {};

	for (let char of arr1) {
		obj1[char] = ++obj1[char] || 1;
	}

	for (let char of arr2) {
		if (!(char in obj1) || !obj1[char]) {
			return false;
		}

		obj1[char]--;
	}

	return true;
}

/**
 * Objective
 *
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value
 * squared in the second array. The frequency of values must be the same.
 */

function same(arr1, arr2) {
	// method with 3 loops
	if (arr1.length !== arr2.length) {
		return false;
	}

	let obj1 = {};
	let obj2 = {};

	for (let num of arr1) {
		const numSquared = num * num;
		obj1[numSquared] = ++obj1[numSquared] || 1;
	}

	for (let num of arr2) {
		obj2[num] = ++obj2[num] || 1;
	}

	for (let key in obj1) {
		if (!(key in obj2) || obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
}

module.exports = {
	isAnagram: isAnagram,
	same: same,
};
