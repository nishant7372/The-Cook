import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar({ bgTheme, theme, index }) {
  return (
    <div>
      <nav className={`navbar ${bgTheme[index]}`}>
        <div className="left-section">
          <img src={require("../img/logo.png")} alt="logo" />
          <h1>The Cook</h1>
        </div>
        <div className="right-section">
          <Searchbar />
          <NavLink to="/" className={theme[index]}>
            Home
          </NavLink>
          <NavLink to="/create" className={theme[index]}>
            Create Recipe
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
