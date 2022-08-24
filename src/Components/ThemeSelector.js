import "./ThemeSelector.css";

export default function ThemeSelector({ handleThemeClick }) {
  return (
    <div className="theme-container">
      <button
        className="bg-default theme-btn"
        onClick={() => {
          handleThemeClick(0);
        }}
      ></button>
      <button
        className="bg-red theme-btn"
        onClick={() => {
          handleThemeClick(1);
        }}
      ></button>
      <button
        className="bg-green theme-btn"
        onClick={() => {
          handleThemeClick(2);
        }}
      ></button>
    </div>
  );
}
