import { useLocation } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import RecipeList from "../../Components/RecipeList";
import "./Search.css";

export default function Search({ bgTheme }) {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "https://database-nis.netlify.app/db.json?q=" + query;

  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="search-title">Recipies including "{query}"</h2>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">{isPending}</div>}
      {recipes && <RecipeList recipes={recipes} bgTheme={bgTheme} />}
    </div>
  );
}
