import "./Home.css";
import { useFetch } from "../../Hooks/useFetch";
import RecipeList from "../../Components/RecipeList";
export default function Home({ btnBgTheme, btnFontTheme }) {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {recipes && (
        <RecipeList
          recipes={recipes}
          btnBgTheme={btnBgTheme}
          btnFontTheme={btnFontTheme}
        />
      )}
    </div>
  );
}
