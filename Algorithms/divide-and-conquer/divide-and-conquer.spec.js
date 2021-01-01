const { search } = require('./index');

describe('search::', () => {
	describe('given the array [1, 2, 3, 4, 5, 6]', () => {
		describe('and given the value to find as 4', () => {
			it('should return 3', () => {
				expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3);
			});
		});

		describe('and given the value to find as 6', () => {
			it('should return 3', () => {
				expect(search([1, 2, 3, 4, 5, 6], 6)).toBe(5);
			});
		});

		describe('and given the value to find as 11', () => {
			it('should return -1', () => {
				expect(search([1, 2, 3, 4, 5, 6], 11)).toBe(-1);
			});
		});
	});

	describe('given the an empty array []', () => {
		it('should return -1', () => {
			expect(search([], 4)).toBe(-1);
		});
	});
});
