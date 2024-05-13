import { adicionarElemento } from "../src/lista";

describe("adicionarElemento", () => {

    it("should add an element to an array", () => {
        expect(adicionarElemento([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
    })
})