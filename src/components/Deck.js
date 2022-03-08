import React from 'react'

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

const Deck = () => {
  let deck = SUITS.flatMap((suit) => 
  CARDS.map(card => ({suit: suit, card: card})
  ))

  let shuffled = [...deck].sort(() => 0.5 - Math.random()).slice(0,21);
  let twentyOneCards = shuffled.slice(0,21)

  return (
    <div> 
      {twentyOneCards.map(({suit, card}, index) => (
        <div key={index}>{card}{suit}</div>
      ))}
    </div>
  )
}

export default Deck
