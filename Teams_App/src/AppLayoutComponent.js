import { useState } from "react";
import { Provider } from "react-redux";
import BodyComponent from "./Components/BodyComponent/BodyComponent";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import ThemeContext from "./Context/ThemeContext";
import store from "./Helpers/store";

const AppLayoutComponent = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <HeaderComponent />
        <BodyComponent />
      </ThemeContext.Provider>
    </Provider>
  );
};

export default AppLayoutComponent;
