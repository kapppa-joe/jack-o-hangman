//const [score, setScore] = useState(0);

let score = 0;
const Score = ({ lettersGuessed, wordToGuess, resetGame }) => {
  let wordLength = 0;
  wordToGuess.split("").forEach((letter) => {
    if (lettersGuessed.includes(letter)) {
      wordLength += 1;
      console.log(wordLength, "wordlength");
    }
  });
  if (wordLength === wordToGuess.length && wordToGuess.length > 0) {
    score += 1;
    resetGame();
  }
  console.log(score, "score");
  return (
    <div id="score">
      <span>Score:{score} </span>
    </div>
  );
};

export default Score;
