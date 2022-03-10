import { DECK } from '../util/createDeck';
import DeckCard from './DeckCard';
import shuffle from '../util/shuffle';

const DeckRows = () => {
  const shuffleDeck = shuffle(DECK);
  const twentyOneCards = shuffleDeck.slice(0,21);

  const firstRow = [...twentyOneCards].splice(0,7);
  const secondRow = [...twentyOneCards].splice(7,7);
  const thirdRow = [...twentyOneCards].splice(14,7);

  return (
    <>
    <div className='deck-container'>
      {firstRow.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
    <div className='deck-container'> 
      {secondRow.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
    <div className='deck-container'> 
      {thirdRow.map((cardObject) => (
        <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
      ))}
    </div>
    </>
  )
}

export default DeckRows
