// CSS Import
import "./App.css";

// React Imports
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components Import
import Navbar from "./Components/Navbar";
import Create from "./Pages/Create/Create";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Recipe from "./Pages/Recipe/Recipe";
import ThemeSelector from "./Components/ThemeSelector";

/*-------------------------------------------------------------------------------------*/

function App() {
  const btnBgTheme = [
    "bg-btn-light-default",
    "bg-btn-light-red",
    "bg-btn-light-green",
  ];
  const btnFontTheme = [
    "font-btn-light-default",
    "font-btn-light-red",
    "font-btn-light-green",
  ];
  const bodyBgTheme = ["bg-light-default", "bg-light-red", "bg-light-green"];
  const bgTheme = ["bg-default", "bg-red", "bg-green"];
  const theme = ["default", "red", "green"];
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  const handleThemeClick = (index) => {
    setIndex((prevIndex) => {
      setPrevIndex(prevIndex);
      return index;
    });
  };

  useEffect(() => {
    document.body.classList.remove(bodyBgTheme[prevIndex]);
    document.body.classList.add(bodyBgTheme[index]);
  }, [index]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bgTheme={bgTheme} theme={theme} index={index} />
        <ThemeSelector handleThemeClick={handleThemeClick} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                btnBgTheme={btnBgTheme}
                btnFontTheme={btnFontTheme}
                index={index}
              />
            }
          ></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route
            path="/search"
            element={
              <Search
                btnBgTheme={btnBgTheme}
                btnFontTheme={btnFontTheme}
                index={index}
              />
            }
          ></Route>
          <Route path="/recipe/:id" element={<Recipe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
