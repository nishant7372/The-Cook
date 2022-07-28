import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "https://database-nis.netlify.app/db.json/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  return (
    <div>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">{isPending}</div>}
      {recipe && (
        <div className="recipe-box">
          <h1>{recipe.title}</h1>
          <p className="cookingTime">Take {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  );
}
