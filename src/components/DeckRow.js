import DeckCard from './DeckCard';

import '../styles/elements/_button.css';

const DeckRow = ({row, handleButtonClick}) => {

  return (
      <div className='deck-container'>
        <button onClick={handleButtonClick} className='button'>my card is here</button>
        {row.map((cardObject) => (
          <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
        ))}
      </div>
  )
}

export default DeckRow
