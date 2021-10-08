import { useState } from "react";

const Guess = ({ lettersGuessed, setLettersGuessed }) => {
  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lettersGuessed.includes(letter)) {
      return;
    }

    setLettersGuessed((currLettersGuessed) => {
      return [...currLettersGuessed, letter];
    });
    setLetter("");
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
      <br />
      <span>
        Letters Used : {lettersGuessed.map((letter) => ` ${letter} `)}
      </span>
    </div>
  );
};

export default Guess;
