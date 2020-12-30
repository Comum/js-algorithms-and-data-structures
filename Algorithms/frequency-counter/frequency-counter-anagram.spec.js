const { isAnagram } = require('./index');

describe('::isAnagram', () => {
	describe('given 2 words that have same number of letters', () => {
		it('should be true', () => {
			expect(isAnagram('cinema', 'iceman')).toBe(true);
		});
	});

	describe('given 2 words that have same number of letters', () => {
		it('should be true', () => {
			expect(isAnagram('roma', 'amor')).toBe(true);
		});
	});

	describe('given 2 word with different length', () => {
		it('should be false', () => {
			expect(isAnagram('equal', 'different')).toBe(false);
		});
	});

	describe('given 2 word with different number of letters', () => {
		it('should be false', () => {
			expect(isAnagram('equal', 'later')).toBe(false);
		});
	});
});
