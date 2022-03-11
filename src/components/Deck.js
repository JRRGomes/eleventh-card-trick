import React, { useState } from 'react';
import DeckRow from './DeckRow';
import { TRICKDECK } from '../util/createTrickDeck';

import '../styles/elements/_deck-container.css';
import '../styles/elements/_deck.css';
import putRowOnCenter from '../util/putRowOnCenter';

const Deck = () => {

  const [currentDeck, setcurrentDeck] = useState(TRICKDECK);

  function handleDeckRowClick(id){  
    setcurrentDeck(putRowOnCenter(id, currentDeck))
  }

  return (
    <>
      {currentDeck.map((row, index)=>
        <DeckRow row={row} handleButtonClick={() => handleDeckRowClick(index)} id={index} key={index} />
      )}
    </>
  )
}

export default Deck
