const Header = ({ resetGame }) => {
  return (
    <div id="header">
      <h1 class="game-title">Hangman</h1>
      <button class="reset-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default Header;
