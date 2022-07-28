import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar({ bgTheme, theme }) {
  return (
    <div>
      <nav className={`navbar ${bgTheme}`}>
        <div className="left-section">
          <img src="img/logo.png" alt="logo" />
          <h1>The Cook</h1>
        </div>
        <div className="right-section">
          <Searchbar />
          <NavLink to="/" className={theme}>
            Home
          </NavLink>
          <NavLink to="/create" className={theme}>
            Create Recipe
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
