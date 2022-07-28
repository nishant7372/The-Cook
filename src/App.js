import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create/Create";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Recipe from "./Pages/Recipe/Recipe";
import { useEffect, useState } from "react";
import ThemeSelector from "./Components/ThemeSelector";

function App() {
  const [btnBgTheme, setBtnBgTheme] = useState("bg-btn-light-default");
  const [btnFontTheme, setBtnFontTheme] = useState("font-btn-light-default");
  const [bgTheme, setBgTheme] = useState("bg-default");
  const [theme, setTheme] = useState("default");
  const handleThemeClick = (btnBg, btnFont, bg, font) => {
    setBtnBgTheme(btnBg);
    setBtnFontTheme(btnFont);
    setBgTheme(bg);
    setTheme(font);
  };

  useEffect(() => {
    if (bgTheme === "bg-default") {
      document.body.classList.remove("bg-light-red");
      document.body.classList.remove("bg-light-green");
      document.body.classList.add("bg-light-default");
    }
    if (bgTheme === "bg-red") {
      document.body.classList.remove("bg-light-green");
      document.body.classList.remove("bg-light-default");
      document.body.classList.add("bg-light-red");
    }
    if (bgTheme === "bg-green") {
      document.body.classList.remove("bg-light-default");
      document.body.classList.remove("bg-light-red");
      document.body.classList.add("bg-light-green");
    }
  }, [bgTheme]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bgTheme={bgTheme} theme={theme} />
        <ThemeSelector handleThemeClick={handleThemeClick} />
        <Routes>
          <Route
            path="/"
            element={
              <Home btnBgTheme={btnBgTheme} btnFontTheme={btnFontTheme} />
            }
          ></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/search" element={<Search bgTheme={bgTheme} />}></Route>
          <Route path="/recipe/:id" element={<Recipe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
