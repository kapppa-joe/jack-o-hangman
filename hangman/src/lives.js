const Lives = ({ livesRemain }) => {
  return (
    <div id="lives">
      <span>Lives:{livesRemain}</span>
      <br />
      <img src="../hangman.svg" alt="" />
    </div>
  );
};

export default Lives;
