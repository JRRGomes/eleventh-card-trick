import { DECK } from '../util/createDeck';
import DeckCard from './DeckCard';
import shuffle from '../util/shuffle';

import "../styles/elements/_button.css";

const DeckRows = () => {
  const shuffleDeck = shuffle(DECK);
  const twentyOneCards = shuffleDeck.slice(0,21);
  
  const firstRow = [...twentyOneCards].splice(0,7);
  const secondRow = [...twentyOneCards].splice(7,7);
  const thirdRow = [...twentyOneCards].splice(14,7);
  
  const magicTrick = () => {
    console.log('magic!')
  }

  return (
    <>
    <div className='deck-container'> 
      <button onClick={magicTrick} className='button'>My card is here</button>
      {firstRow.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
    <div className='deck-container'>
      <button className='button'>My card is here</button>
      {secondRow.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
    <div className='deck-container'>
      <button className='button'>My card is here</button> 
      {thirdRow.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
    </>
  )
}

export default DeckRows
