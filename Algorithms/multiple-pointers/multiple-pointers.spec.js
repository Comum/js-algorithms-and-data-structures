const { sumZero } = require('./index');

describe('sumZero::', () => {
	describe('give the array [-3, -2, -1, 0, 1, 2, 3]', () => {
		it('should return [3, -3]', () => {
			expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
		});
	});

	describe('give the array [-2, 0, 1, 3]', () => {
		it('should return undefined', () => {
			expect(sumZero([-2, 0, 1, 3])).toEqual(undefined);
		});
	});

	describe('give the array [1, 2, 3]', () => {
		it('should return undefined', () => {
			expect(sumZero([1, 2, 3])).toEqual(undefined);
		});
	});

	describe('give the array [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]', () => {
		it('should return [4, -4]', () => {
			expect(sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual([-4, 4]);
		});
	});

	describe('give the array [-7, -5, -3, -2, -1, 0, 1, 2, 4, 6]', () => {
		it('should return [2, -2]', () => {
			expect(sumZero([-7, -5, -3, -2, -1, 0, 1, 2, 4, 6])).toEqual([-2, 2]);
		});
	});
});
