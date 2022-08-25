import { projectFirestore } from "../../firebase/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

export default function Recipe() {
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const parseMethod = (method) => {
    const splitted = method.split("#");
    return splitted;
  };

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
          <ul className="ingredients">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <ul className="method">
            {parseMethod(recipe.method).map((step, index) => (
              <li key={index}>
                <b>{step.substring(0, step.indexOf(".") + 1)}</b>{" "}
                {step.substring(step.indexOf(".") + 1, step.length)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
