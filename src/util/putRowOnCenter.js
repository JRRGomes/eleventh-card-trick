function putRowOnCenter(id, currentDeck){
  const [edge] = currentDeck.splice(id,1)
  const middleIndex= Math.floor(currentDeck.length/2)
  const firstHalf = currentDeck.slice(0,middleIndex)
  const secondHalf = currentDeck.slice(middleIndex, currentDeck.length)

  return [...firstHalf, edge, ...secondHalf];
}

export default putRowOnCenter
