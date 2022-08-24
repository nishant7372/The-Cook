import "./RecipeList.css";
import { Link } from "react-router-dom";

export default function RecipeList({ data, btnBgTheme, btnFontTheme, index }) {
  return (
    <div className="recipe-container">
      {data &&
        data.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2 className="Title">{recipe.title}</h2>
            <p className="cookingTime">{recipe.cookingTime} to make</p>
            <p className="description">
              {recipe.method.substring(0, 100) + "..."}
            </p>
            <Link
              to={`/recipe/${recipe.id}`}
              className={`${btnBgTheme[index]} ${btnFontTheme[index]}`}
            >
              Cook This
            </Link>
          </div>
        ))}
    </div>
  );
}
