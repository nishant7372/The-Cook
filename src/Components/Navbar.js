import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar({ bgTheme, theme, index }) {
  return (
    <div className={`sticky ${bgTheme[index]}`}>
      <nav className={`navbar`}>
        <div className="left-section">
          <img src={require(`../img/logo${index}.png`)} alt="logo" />
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
