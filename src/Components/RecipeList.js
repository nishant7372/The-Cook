import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeList({
  recipes,
  btnBgTheme,
  btnFontTheme,
  bgTheme,
}) {
  const [btnBg, setBtnBg] = useState("bg-btn-light-default");
  const [btnFont, SetBtnFont] = useState("font-btn-light-default");

  useEffect(() => {
    if (bgTheme === "bg-default") {
      setBtnBg("bg-btn-light-default");
      SetBtnFont("font-btn-light-default");
    }
    if (bgTheme === "bg-red") {
      setBtnBg("bg-btn-light-red");
      SetBtnFont("font-btn-light-red");
    }
    if (bgTheme === "bg-green") {
      setBtnBg("bg-btn-light-green");
      SetBtnFont("font-btn-light-green");
    }
  }, [bgTheme]);

  if (recipes.length === 0)
    return <div className="error">No Recipies to Load...</div>;

  console.log(typeof recipes);
  return (
    <div className="recipe-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h2 className="Title">{recipe.title}</h2>
          <p className="cookingTime">{recipe.cookingTime} to make</p>
          <p className="description">
            {recipe.method.substring(0, 100) + "..."}
          </p>
          <Link
            to={`/recipe/${recipe.id}`}
            className={`${btnBg} ${btnFont} ${btnBgTheme} ${btnFontTheme}`}
          >
            Cook This
          </Link>
        </div>
      ))}
      ;
    </div>
  );
}
