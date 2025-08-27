import React, { useEffect } from "react";
import useAppStore from "../store/useAppStore";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useAppStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      useAppStore.setState({ darkMode: true });
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded-lg shadow-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
