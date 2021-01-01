const { countUniqueValues, countUniqueValuesByValue } = require('./index');

describe('::countUniqueValues', () => {
	describe('given the array [1, 1, 1, 1, 1, 2]', () => {
		it('should equal to 2', () => {
			expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
		});
	});

	describe('given the array [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]', () => {
		it('should equal to 7', () => {
			expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
		});
	});

	describe('given the array []', () => {
		it('should equal to 0', () => {
			expect(countUniqueValues([])).toBe(0);
		});
	});

	describe('given the array [-2, -1, -1, 0, 1]', () => {
		it('should equal to 4', () => {
			expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
		});
	});
});

describe('::countUniqueValuesByValue', () => {
	describe('given the array [1, 1, 1, 1, 1, 2]', () => {
		it('should equal to 2', () => {
			expect(countUniqueValuesByValue([1, 1, 1, 1, 1, 2])).toBe(2);
		});
	});

	describe('given the array [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]', () => {
		it('should equal to 7', () => {
			expect(countUniqueValuesByValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
		});
	});

	describe('given the array []', () => {
		it('should equal to 0', () => {
			expect(countUniqueValuesByValue([])).toBe(0);
		});
	});

	describe('given the array [-2, -1, -1, 0, 1]', () => {
		it('should equal to 4', () => {
			expect(countUniqueValuesByValue([-2, -1, -1, 0, 1])).toBe(4);
		});
	});
});
