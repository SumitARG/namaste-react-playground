import { Outlet } from "react-router-dom";
// import CardsContainer from "../CardsContainer/CardsContainer";
import "./BodyComponent.css";

const BodyComponent = () => {
  return (
    <div className="body-component">
      <Outlet/>
    </div>
  )
};

export default BodyComponent;
