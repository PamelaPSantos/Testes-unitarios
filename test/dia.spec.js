import { obterDiaAtual } from "../src/dia";

describe("obterDiaAtual", () => {

    it("should return the current day", () => {
        expect(obterDiaAtual()).toBe(13)
    })
})