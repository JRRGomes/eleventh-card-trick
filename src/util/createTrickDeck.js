import { DECK } from './createDeck';
import shuffle from './shuffle';

const createTrickDeck = () => {
  const shuffleDeck = shuffle(DECK);
  const twentyOneCards = shuffleDeck.slice(0,21);

  const firstRow = [...twentyOneCards].splice(0,7);
  const secondRow = [...twentyOneCards].splice(7,7);
  const thirdRow = [...twentyOneCards].splice(14,7);

  const trickDeck = [firstRow, secondRow, thirdRow];

  return trickDeck
}

export const TRICKDECK = createTrickDeck()
