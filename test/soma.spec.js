const {soma} = require('../src/soma')

describe('soma', () => {

    it('should sum two numbers', () => {
        expect(soma(1, 2)).toBe(3)
    })
})