import { DECK } from '../util/createDeck'

describe("CreateDeck", () => {
  it("should return a array of objects with 52 cards/suits", () => {
    const expected = [{"card": "A","suit": "H",}, {"card": "2","suit": "C",},{"card": "3","suit": "S",}]
    expect(DECK).toEqual(expect.arrayContaining(expected));
  });
});
