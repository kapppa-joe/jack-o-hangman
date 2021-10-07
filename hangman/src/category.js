const Category = () => {
  return (
    <div id="category">
      <label htmlFor="categories">category</label>
      <select id="categories">
        <option value="animals">Animals</option>
        <option value="colours">Colours</option>
      </select>
      <br />

      <label htmlFor="guessedWord">Word</label>
      <span id="guessedWord">_ _ _</span>
    </div>
  );
};

export default Category;
