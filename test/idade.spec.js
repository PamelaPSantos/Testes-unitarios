const { verificaIdade } = require ('../src/idade')

describe('verificaIdade', () => {
    it('should return true if age is greater than 18', () => {
        expect(verificaIdade(19)).toBe(true);
    });
});