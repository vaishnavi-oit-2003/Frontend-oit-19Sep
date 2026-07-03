import React from "react";
import useLocalStorage from "@shared/hooks/useLocalStorage";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useLocalStorage("current_theme", "light");

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
