const Header = ({ resetGame }) => {
  return (
    <div id="header">
      <h1 class="title">Hangman</h1>
      <button class="reset" type="submit" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default Header;
