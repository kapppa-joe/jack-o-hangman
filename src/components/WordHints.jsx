const WordHints = ({ wordToGuess, categoryChosen, lettersGuessed }) => {
  return (
    <div id="word-hints">
      <span>Hints:</span>
      <span>Word to guess:</span>
      <span id="category">{categoryChosen}</span>
      <span id="guessedWord">
        {wordToGuess.split("").map((letter) => {
          if (lettersGuessed.includes(letter)) {
            return `${letter}`;
          } else {
            return "_";
          }
        })}
      </span>
    </div>
  );
};

export default WordHints;
