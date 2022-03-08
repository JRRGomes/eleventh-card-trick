import CreateDeck from "../components/CreateDeck";

describe("CreateDeck", () => {
  it("should return a array with length 52", () => {
    expect(CreateDeck()).toHaveLength(52);
  });

  it("should return a array with 13 card with Heart suit prop", () => {
    const heartCards = CreateDeck().filter((card) => {
      return card.suit === 'H'
    }) 
    expect(heartCards).toHaveLength(13);
  });

  it("should return a array with 13 card with Club suit prop", () => {
    const heartCards = CreateDeck().filter((card) => {
      return card.suit === 'C'
    }) 
    expect(heartCards).toHaveLength(13);
  });

  it("should return a array with 13 card with Diamond suit prop", () => {
    const heartCards = CreateDeck().filter((card) => {
      return card.suit === 'D'
    }) 
    expect(heartCards).toHaveLength(13);
  });

  it("should return a array with 13 card with Spade suit prop", () => {
    const heartCards = CreateDeck().filter((card) => {
      return card.suit === 'S'
    }) 
    expect(heartCards).toHaveLength(13);
  });

  it("should return a array of objects with 52 cards/suits", () => {
    const expected = [{"card": "A","suit": "H",}, {"card": "2","suit": "C",}, {"card": "3","suit": "S",}, {"card": "3","suit": "D",}]
    expect(CreateDeck()).toEqual(expect.arrayContaining(expected));
  });
});
