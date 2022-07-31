import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { projectFirestore } from "../../firebase/config";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("00:00");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: handleCookingTime(),
    };
    try {
      projectFirestore.collection("recipies").add(doc);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCookingTime = () => {
    const hr = parseInt(cookingTime.substring(0, 2));
    const min = parseInt(cookingTime.substring(3, 5));
    return `${hr * 60 + min} minutes`;
  };

  const handleReset = (e) => {
    e.preventDefault();
    setMethod("");
    setTitle("");
    setIngredients([]);
    setCookingTime("00:00");
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim().toLowerCase();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }

    setNewIngredient("");
    ingredientInput.current.focus();
  };

  const handleDeleteIngredient = (e) => {
    e.preventDefault();
    setIngredients((prevIngredients) => prevIngredients.slice(0, -1));
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="title">Add a new Recipe</h2>
        <label className="field">
          <span>Recipe Name:</span>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>
        <label className="field">
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAddIngredient}>add</button>
            <button className="warning" onClick={handleDeleteIngredient}>
              delete
            </button>
          </div>
          <p>
            Current Ingredients: "
            {ingredients.map((ing, index) => (
              <em key={index}>{ing}, </em>
            ))}
            "
          </p>
        </label>
        <label className="field">
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            required
          />
        </label>
        <label className="field">
          <span>Cooking Time (hr:min):</span>
          <input
            type="time"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          />
        </label>
        <div className="btn">
          <button>Submit</button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
