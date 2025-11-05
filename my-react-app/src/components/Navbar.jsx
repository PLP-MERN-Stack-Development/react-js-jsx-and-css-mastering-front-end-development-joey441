import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">MyApp</Link>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/posts">Posts</Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-2 py-1 rounded-md"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
