import React from 'react';
import '../styles/elements/_deck-container.css';
import '../styles/elements/_deck.css';
import CreateDeck from './CreateDeck'

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
  
  let deck = CreateDeck(SUITS, CARDS)

  let shuffled = [...deck].sort(() => 0.5 - Math.random()).slice(0,21);
  let twentyOneCards = shuffled.slice(0,21)

  return (
    <div className='deck-container'> 
      {twentyOneCards.map(({suit, card}, index) => (
        <div className='deck' key={index}>{card}{suit}</div>
      ))}
    </div>
  )
}

export default Deck
