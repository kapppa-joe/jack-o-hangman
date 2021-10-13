const WordHints = ({ wordToGuess, categoryChosen, lettersGuessed }) => {
  return (
    <div id="word-hints">
      <div id="hints">
        <span>Hints:</span>
        <span id="category">{categoryChosen}</span>
      </div>

      <div id="word-to-guess">
        <span>Word to guess:</span>
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
    </div>
  );
};

export default WordHints;
