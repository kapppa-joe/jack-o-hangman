const Category = (props) => {
  const { setWordToGuess, wordToGuess } = props;

  const colours = ["blue", "red", "green"];
  const animals = ["cat", "dog", "lion"];

  const randomIntBelow = (num) => {
    return Math.floor(Math.random() * num);
  };

  const handleChange = (e) => {
    let word = "";
    if (e.target.value === "animals") {
      word = animals[randomIntBelow(animals.length)];
    } else if (e.target.value === "colours") {
      word = colours[randomIntBelow(colours.length)];
    }

    setWordToGuess(word);
  };

  return (
    <div id="category">
      <label htmlFor="categories">category</label>
      <select id="categories" onChange={handleChange}>
        <option value="animals">Animals</option>
        <option value="colours">Colours</option>
      </select>
      <br />

      <label htmlFor="guessedWord">Word</label>
      <span id="guessedWord">
        {wordToGuess.split("").map((character) => " _ ")}
      </span>
    </div>
  );
};

export default Category;
