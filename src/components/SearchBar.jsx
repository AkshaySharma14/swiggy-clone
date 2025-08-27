import React from "react";
import useAppStore from "../store/useAppStore";

export default function SearchBar() {
  const { query, filter, setQuery, setFilter } = useAppStore();

  const handleSearch = (e) => setQuery(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-4 my-6">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search restaurants..."
        className="border px-4 py-2 rounded-lg w-full md:w-[400px] outline-none shadow-sm
                   bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />
      <select
        value={filter}
        onChange={handleFilter}
        className="border px-4 py-2 rounded-lg shadow-sm
                   bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        <option value="">All</option>
        <option value="rating">Rating 4.5+</option>
        <option value="fast">Fast Delivery (&lt; 30 mins)</option>
        <option value="veg">Pure Veg</option>
      </select>
    </div>
  );
}
