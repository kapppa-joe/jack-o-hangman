import splatter0 from "../assets/image/bloody-splatter-0.png";
import splatter1 from "../assets/image/bloody-splatter-1.svg";
import splatter2 from "../assets/image/bloody-splatter-2.svg";

const BloodEffect = () => {
  return (
    <div
      className="blood-effect show"
      style={{ backgroundImage: `url(${splatter2})` }}
    ></div>
  );
};

export default BloodEffect;
