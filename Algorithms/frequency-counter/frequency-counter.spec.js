const { same } = require('./index');

describe('::same', () => {
	describe('given 2 arrays with same length and correct numbers squared', () => {
		it('should be true', () => {
			expect(same([1, 2, 3], [1, 4, 9])).toBe(true);
		});
	});

	describe('given 2 arrays with same length and incorrect numbers squared', () => {
		it('should be false', () => {
			expect(same([1, 2, 3], [1, 4, 4])).toBe(false);
		});
	});

	describe('given 2 arrays with different length', () => {
		it('should be false', () => {
			expect(same([1, 2, 3], [1, 4])).toBe(false);
		});
	});
});
