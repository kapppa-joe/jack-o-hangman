import { judgeGuess } from "../utils";

describe("judgeGuess", () => {
  test("return an object with props `correctGuess` and `wrongGuess`", () => {
    const lettersGuessed = [];
    const wordToGuess = "";
    const output = judgeGuess(lettersGuessed, wordToGuess);

    expect(output).toMatchObject({
      correctGuess: [],
      wrongGuess: [],
    });
  });

  test("divide the letters guessed into correct guess and wrong guess", () => {
    const lettersGuessed = ["a", "b", "c", "d", "e"];
    const wordToGuess = "apple";
    const output = judgeGuess(lettersGuessed, wordToGuess);

    expect(output).toMatchObject({
      correctGuess: ["a", "e"],
      wrongGuess: ["b", "c", "d"],
    });
  });

  test("not mutating the input array", () => {
    const lettersGuessed = ["a", "b", "c", "d", "e"];
    const wordToGuess = "apple";

    const lettersGuessedCopy = ["a", "b", "c", "d", "e"];
    judgeGuess(lettersGuessed, wordToGuess);

    expect(lettersGuessed).toEqual(lettersGuessedCopy);
  });
});
