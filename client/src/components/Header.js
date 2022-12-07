import React from "react";

function Header({ onToggleDarkMode, isDarkMode }) {
  const btnContext = isDarkMode ? "Light" : "Dark";
  return (
    <div>
      <h1>Header</h1>
      <button onClick={onToggleDarkMode}>{btnContext}</button>
    </div>
  );
}

export default Header;
