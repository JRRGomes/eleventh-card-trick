import DeckCard from './DeckCard';

const DeckRow = ({row}) => {

  return (
    <>
      <div className='deck-container'>
        {row.map((cardObject) => (
          <DeckCard key={`${cardObject.suit}-${cardObject.card}`} {...cardObject} />
        ))}
      </div>
    </>
  )
}

export default DeckRow
