const Category = ({ setWordToGuess, wordToGuess, lettersGuessed }) => {
  const colours = ["blue", "red", "green", "white", "black", "brown", "cyan"];
  const animals = ["cat", "dog", "lion", "fish", "goat", "pig", "rat"];

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
      <section class="select">
        <label class="label" htmlFor="categories">
          Category
        </label>
        <select id="categories" onChange={handleChange}>
          <option value="animals">Animals</option>
          <option value="colours">Colours</option>
        </select>
        <br />
      </section>
      <section class="guessedWord">
        <label class="label" htmlFor="guessedWord">
          Word to guess:
        </label>
        <span class="span" id="guessedWord">
          {wordToGuess.split("").map((letter) => {
            if (lettersGuessed.includes(letter)) {
              return letter;
            } else {
              return " _ ";
            }
          })}
        </span>
      </section>
    </div>
  );
};

export default Category;
