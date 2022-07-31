import "./Home.css";
import RecipeList from "../../Components/RecipeList";
import { projectFirestore } from "../../firebase/config";
import { useEffect, useState } from "react";

export default function Home({ btnBgTheme, btnFontTheme }) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

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
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);
  return (
    <div>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {data && (
        <RecipeList
          data={data}
          btnBgTheme={btnBgTheme}
          btnFontTheme={btnFontTheme}
        />
      )}
    </div>
  );
}
