import React from "react";
import clsx from "clsx";

const Button = ({ variant = "primary", children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={clsx(baseStyles, variants[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md hover:opacity-80 transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
