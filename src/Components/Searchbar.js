import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/search?q=${term}`);
    if (term === "") navigate("/");
  }, [term]);

  return (
    <form
      className="searchBar"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <img src={require("../img/search.png")} alt="search" />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        required
      />
    </form>
  );
}
