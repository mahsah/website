import Menu from "../../Pages/Menu/Menu";
import "./Starter.css";

const Starter = () => {
  return (
    <div className="header-container">
      <div className="position-sticky top-0" style={{ zIndex: "1000" }}>
        <Menu />
      </div>
    </div>
  );
};

export default Starter;
