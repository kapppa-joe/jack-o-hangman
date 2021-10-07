const Guess = () => {
  return (
    <div id="guess">
      <div>
        <label htmlFor="guessedLetter">Letter</label>
        <input type="text"></input>
        <button type="submit">Enter</button>
        <br />
      </div>
      <span>Letters Used </span>
    </div>
  );
};

export default Guess;
