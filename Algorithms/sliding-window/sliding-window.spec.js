const { maxSubarraySum } = require('./index');

describe('maxSubarraySum::', () => {
	describe('given the array [1, 2, 5, 2, 8, 1, 5]', () => {
		describe('and given the value 2', () => {
			it('should return 10', () => {
				expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
			});
		});

		describe('and given the value 4', () => {
			it('should return 17', () => {
				expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
			});
		});
	});

	describe('given the array [4, 2, 1, 6]', () => {
		describe('and given the value 1', () => {
			it('should return 6', () => {
				expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
			});
		});
	});

	describe('given the array [4, 2, 1, 6, 2]', () => {
		describe('and given the value 4', () => {
			it('should return 13', () => {
				expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
			});
		});
	});

	describe('given the array [1]', () => {
		describe('and given the value 4', () => {
			it('should return null', () => {
				expect(maxSubarraySum([1], 4)).toBe(null);
			});
		});
	});

	describe('given the array []', () => {
		describe('and given the value 4', () => {
			it('should return null', () => {
				expect(maxSubarraySum([], 4)).toBe(null);
			});
		});
	});
});
