import { useState } from "react";
import BodyComponent from "./Components/BodyComponent/BodyComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import ThemeContext from "./Context/ThemeContext";

const AppLayoutComponent = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <HeaderComponent />
      <BodyComponent />
    </ThemeContext.Provider>
  );
};

export default AppLayoutComponent;
