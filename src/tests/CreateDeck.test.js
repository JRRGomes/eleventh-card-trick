import CreateDeck from "../components/CreateDeck";

describe("CreateDeck", () => {
  it("should return a array of objects with 52 cards/suits", () => {
    expect(CreateDeck()).toMatchSnapshot();
  });
});
