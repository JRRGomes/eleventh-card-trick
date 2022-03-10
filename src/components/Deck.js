import React from 'react';
import { DECK } from '../util/createDeck';
import shuffle from '../util/shuffle';
import DeckCard from './DeckCard';

import '../styles/elements/_deck-container.css';
import '../styles/elements/_deck.css';
import DeckRows from './DeckRows';

const Deck = () => {
  const shuffleDeck = shuffle(DECK);
  const twentyOneCards = shuffleDeck.slice(0,21);

  const firstRow = [...twentyOneCards].splice(0,7);
  const secondRow = [...twentyOneCards].splice(7,7);
  const thirdRow = [...twentyOneCards].splice(14,7);

  console.log(twentyOneCards)
  console.log(firstRow)
  console.log(secondRow)
  console.log(thirdRow)

  return (
    <DeckRows />
  )
}

export default Deck
