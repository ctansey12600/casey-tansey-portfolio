import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles";

function Header({ onToggleDarkMode, isDarkMode }) {
  const btnContext = isDarkMode ? "Light" : "Dark";

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/resume", name: "Resume" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  const navCollection = routes.map((route) => (
    <Button as={NavLink} key={route.path} to={route.path} end>
      {route.name}
    </Button>
  ));

  return (
    <div>
      <h1>Header</h1>
      <nav>{navCollection}</nav>
      <button onClick={onToggleDarkMode}>{btnContext}</button>
    </div>
  );
}

export default Header;
