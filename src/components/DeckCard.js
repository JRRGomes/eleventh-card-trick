const DeckCard = ({ suit, card }) => {
  return (
    <div className='deck'>{card}{suit}</div>
  )
}

export default DeckCard
