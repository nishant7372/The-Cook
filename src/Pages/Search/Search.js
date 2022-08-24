import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeList from "../../Components/RecipeList";
import "./Search.css";
import { projectFirestore } from "../../firebase/config";

export default function Search({ btnBgTheme, btnFontTheme, index }) {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const find = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value.indexOf(query) >= 0) return true;
      if (typeof value === typeof []) {
        for (let i = 0; i < value.length; i++)
          if (value[i].indexOf(query) >= 0) return true;
      }
    }
    return false;
  };
  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipies")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No Recipies to Load...");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            if (find(doc.data())) results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [query]);

  return (
    <div>
      <h2 className="search-title">Recipies including "{query}"</h2>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">{isPending}</div>}
      {data && (
        <RecipeList
          data={data}
          btnBgTheme={btnBgTheme}
          btnFontTheme={btnFontTheme}
          index={index}
        />
      )}
    </div>
  );
}
