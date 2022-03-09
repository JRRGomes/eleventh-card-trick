import shuffle from '../util/shuffle';

describe("Shuffle", () => {
  it("should return a shuffled array with all array elements", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));
  });

  it("should return a shuffled array with the same original array length", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray.length).toBe(array.length);
  });

  it("should return a shuffle array with elements in diferent position", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toEqual(array);
  });
});
