const LetterButton = (props) => {
  const { letter, onClick, correctGuess, wrongGuess, gameOver } = props;

  let classesToApply = ["letter-button"];
  if (gameOver) {
    classesToApply.push("wrong-guess");
  } else if (correctGuess) {
    classesToApply.push("correct-guess");
  } else if (wrongGuess) {
    classesToApply.push("wrong-guess");
  } else {
    classesToApply.push("can-click");
  }

  return (
    <span
      className={classesToApply.join(" ")}
      onClick={classesToApply.includes("can-click") ? onClick : null}
    >
      {letter}
    </span>
  );
};

export default LetterButton;
