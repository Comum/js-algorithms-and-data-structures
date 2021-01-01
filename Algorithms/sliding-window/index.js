/**
 * Objective
 *
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */
function maxSubarraySum(arr, n) {
	if (!arr.length || arr.length < n) {
		return null;
	}

	let max = 0;
	let temp = 0;

	for (let i = 0; i < n; i++) {
		max += arr[i];
	}

	temp = max;

	for (let i = n; i < arr.length; i++) {
		temp = temp - arr[i - n] + arr[i];
		max = Math.max(max, temp);
	}

	return max;
}

module.exports = {
	maxSubarraySum: maxSubarraySum,
};
