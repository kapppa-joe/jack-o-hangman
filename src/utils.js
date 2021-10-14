const pool = [
  {
    category: "a monster",
    words: [
      "vampire",
      "werewolf",
      "mummy",
      "ghoul",
      "demon",
      "frankenstein",
      "zombie",
      "spectre",
      "wraith",
    ],
  },
  {
    category: "an animal",
    words: [
      "cat",
      "dog",
      "frog",
      "duck",
      "lion",
      "fish",
      "goat",
      "pig",
      "rat",
      "bat",
      "lamb",
      "crab",
    ],
  },
  {
    category: "a vegetable",
    words: [
      "pumpkin",
      "avocado",
      "beetroot",
      "parsnip",
      "spinach",
      "cucumber",
      "aubergine",
    ],
  },
];

const debugpool = [{ category: "for debug :)", words: ["hi"] }];

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
