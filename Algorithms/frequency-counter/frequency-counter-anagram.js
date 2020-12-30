/**
 * Objective
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
 * formed from iceman. Not case sensitive.
 */

function isAnagram(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let obj1 = {};
	let obj2 = {};

	for (let char of arr1) {
		obj1[char] = obj1[char]++ || 1;
	}

	for (let char of arr2) {
		obj2[char] = obj2[char]++ || 1;
	}

	for (let key in obj1) {
		if (!(key in obj2) || obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
}

console.log('Should be true: ', isAnagram('cinema', 'iceman'));
console.log('Should be true: ', isAnagram('roma', 'amor'));
console.log('Should be false: ', isAnagram('equal', 'different'));
console.log('Should be false: ', isAnagram('equal', 'later'));
