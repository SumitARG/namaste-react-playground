import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import BodyComponent from "./Components/BodyComponent/BodyComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

root.render(<AppLayoutComponent />);
