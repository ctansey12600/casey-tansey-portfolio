import React from "react";
import { Link, Outlet } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <nav>
        <Link to="web">Website Development</Link>
        <Link to="graphic">Graphic Design</Link>
      </nav>
      <p>Portfolio Page</p>
      <Outlet />
    </div>
  );
}

export default Portfolio;
