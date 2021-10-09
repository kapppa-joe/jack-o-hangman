const pool = [
  {
    category: "colour",
    words: ["blue", "red", "green", "white", "black", "brown", "cyan"],
  },
  {
    category: "animal",
    words: ["cat", "dog", "lion", "fish", "goat", "pig", "rat"],
  },
];

export function chooseWord() {
  const categoryObj = randomFrom(pool);
  const word = randomFrom(categoryObj.words);
  return { category: categoryObj.category, word: word };
}

function randomFrom(array) {
  return array[randomInt(array.length)];
}
function randomInt(num) {
  // generate an random int i with 0 <= i < n;
  return Math.floor(Math.random() * num);
}

export function judgeGuess(lettersGuessed, wordToGuess) {
  const [correctGuess, wrongGuess] = [[], []];
  for (const letter of lettersGuessed) {
    if (wordToGuess.includes(letter)) {
      correctGuess.push(letter);
    } else {
      wrongGuess.push(letter);
    }
  }
  return { correctGuess, wrongGuess };
}
