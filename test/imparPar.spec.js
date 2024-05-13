const {imparPar} = require('../src/imparPar')

describe('imparPar', () => {
    it('should return true if number is even', () => {
        expect(imparPar(2)).toBe(true)
    })
})