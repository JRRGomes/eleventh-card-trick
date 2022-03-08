const CreateDeck = (suits, cards) => {
  let deck = suits.flatMap((suit) => 
  cards.map(card => ({suit: suit, card: card})
  ))
  return deck
}

export default CreateDeck
