import { useState } from "react";

const Guess = (props) => {
  const { gameSession } = props;
  const { lettersGuessed, setLettersGuessed } = gameSession;

  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lettersGuessed.includes(letter)) {
      return;
    }

    setLettersGuessed((currLettersGuessed) => {
      return [...currLettersGuessed, letter];
    });
  };

  return (
    <div id="guess">
      <form onSubmit={handleSubmit}>
        <label htmlFor="guessedLetter">Letter</label>
        <input
          type="text"
          required
          maxLength="1"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
        ></input>
        <button type="submit">Enter</button>
        <br />
      </form>
      <span>
        Letters Used : {lettersGuessed.map((letter) => ` ${letter} `)}
      </span>
    </div>
  );
};

export default Guess;
