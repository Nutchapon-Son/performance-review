/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {
  const random1 = Math.random() * 50;
  const random2 = Math.random() * 50;
  const temp = cards[random1];
  cards[random1] = cards[random2];
  cards[random2] = temp;
  return cards;

  throw new Error("Not implemented");
}
