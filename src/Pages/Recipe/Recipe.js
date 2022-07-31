import { projectFirestore } from "../../firebase/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });
  }, [id]);

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
