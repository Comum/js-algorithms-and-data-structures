const { incrementalSumLoop, incrementalSumEquation } = require('./index');

describe('::incrementalSumLoop', () => {
	let result;

	beforeAll(() => {
		let start = performance.now();
		result = incrementalSumLoop(10000);
		let end = performance.now();

		console.log(`Time elapsed: ${(end - start) / 1000} seconds`);
	});

	test('should equal to 50005000', () => {
		expect(result).toBe(50005000);
	});
});

describe('::incrementalSumEquation', () => {
	let result;

	beforeAll(() => {
		let start = performance.now();
		result = incrementalSumEquation(10000);
		let end = performance.now();

		console.log(`Time elapsed: ${(end - start) / 1000} seconds`);
	});

	test('should equal to 50005000', () => {
		expect(result).toBe(50005000);
	});
});
