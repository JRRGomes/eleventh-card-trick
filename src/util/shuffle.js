const shuffle = (deck) => {
  let shuffle = [...deck].sort(() => 0.5 - Math.random());
  return shuffle
}

export default shuffle
