const SUITS = ["H", "S", "D", "C"];
const CARDS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const CreateDeck = () => {
  let deck = SUITS.flatMap((suit) => 
  CARDS.map(card => ({suit: suit, card: card})
  ))
  return deck
}
export default CreateDeck
