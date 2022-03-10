import React from 'react';
import DeckRow from './DeckRow';
import { DECK } from '../util/createDeck';
import shuffle from '../util/shuffle';

import '../styles/elements/_deck-container.css';
import '../styles/elements/_deck.css';

const Deck = () => {
  const shuffleDeck = shuffle(DECK);
  const twentyOneCards = shuffleDeck.slice(0,21);

  const firstRow = [...twentyOneCards].splice(0,7);
  const secondRow = [...twentyOneCards].splice(7,7);
  const thirdRow = [...twentyOneCards].splice(14,7);

  return (
    <>
      <DeckRow row={firstRow} />
      <DeckRow row={secondRow} />
      <DeckRow row={thirdRow} />
    </>
  )
}

export default Deck
