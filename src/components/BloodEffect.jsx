import background from "../assets/image/blood-splatter-png-44471.png";

const BloodEffect = () => {
  return (
    <div
      className="blood-effect show"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default BloodEffect;
