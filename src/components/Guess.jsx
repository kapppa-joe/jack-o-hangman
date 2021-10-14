import LetterButton from "./LetterButton";

const Guess = ({ correctGuess, wrongGuess, setLettersGuessed, isGameOver }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const chooseLetter = (letter) => {
    setLettersGuessed((prevState) => {
      return [...prevState, letter];
    });
  };

  return (
    <div id="guess">
      <span id="keyboard">
        {letters.map((letter) => (
          <LetterButton
            isGameOver={isGameOver}
            correctGuess={correctGuess.includes(letter)}
            wrongGuess={wrongGuess.includes(letter)}
            letter={letter}
            onClick={() => chooseLetter(letter)}
          />
        ))}
      </span>
    </div>
  );
};

export default Guess;
