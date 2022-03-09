import React from 'react';
import { DECK } from '../util/createDeck';
import shuffle from '../util/shuffle';
import DeckCard from './DeckCard';

import '../styles/elements/_deck-container.css';
import '../styles/elements/_deck.css';

const Deck = () => {
  const shuffleDeck = shuffle(DECK);
  const twentyOneCards = shuffleDeck.slice(0,21);

  return (
    <div className='deck-container'> 
      {twentyOneCards.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
  )
}

export default Deck
