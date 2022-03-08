import CreateDeck from "../components/CreateDeck";
import Shuffle from "../components/Shuffle";

describe("Shuffle", () => {
  it("should return a array of objects with 52 cards/suits shuffled", () => {
    const deck = CreateDeck()
    const expected = [{"card": "A","suit": "H",}, {"card": "2","suit": "C",},{"card": "3","suit": "S",}]
    expect(Shuffle(deck)).toEqual(expect.arrayContaining(expected));
  });
});
