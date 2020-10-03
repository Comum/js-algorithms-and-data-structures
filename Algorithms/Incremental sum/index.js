/**
 * Incremental sum - function that takes a number and adds all integers up to it.
 */

function incrementalSumLoop(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	}

	return sum;
}

function incrementalSumEquation(n) {
	return (n * (n + 1)) / 2;
}

module.exports = {
	incrementalSumLoop: incrementalSumLoop,
	incrementalSumEquation,
};
