import "./ThemeSelector.css";

export default function ThemeSelector({ handleThemeClick }) {
  const handleTheme = (a, b, c, d) => {
    handleThemeClick(c, d, a, b);
  };

  return (
    <div className="theme-container">
      <button
        className="bg-default theme-btn"
        onClick={() => {
          handleTheme(
            "bg-default",
            "default",
            "bg-btn-light-default",
            "font-btn-light-default"
          );
        }}
      ></button>
      <button
        className="bg-red theme-btn"
        onClick={() => {
          handleTheme(
            "bg-red",
            "red",
            "bg-btn-light-red",
            "font-btn-light-red"
          );
        }}
      ></button>
      <button
        className="bg-green theme-btn"
        onClick={() => {
          handleTheme(
            "bg-green",
            "green",
            "bg-btn-light-green",
            "font-btn-light-green"
          );
        }}
      ></button>
    </div>
  );
}
