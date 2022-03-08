const Shuffle = (deck) => {
  let shuffle = [...deck].sort(() => 0.5 - Math.random()).slice(0,21);
  return shuffle
}

export default Shuffle
