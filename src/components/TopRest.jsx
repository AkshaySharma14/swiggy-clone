import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function TopRest() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
    setFiltered(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((res) =>
          res.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleFilter = (filterType) => {
    let filteredData = [...data];

    if (filterType === "rating") {
      filteredData = data.filter((res) => res.rating >= 4.5);
    } else if (filterType === "fast") {
      filteredData = data.filter((res) => res.minTime <= 30);
    } else if (filterType === "veg") {
      filteredData = data.filter((res) =>
        res.name.toLowerCase().includes("veg")
      );
    }

    setFiltered(filteredData);
  };

  return (
    <div className="max-w-[1200px] mx-auto mb-[100px]">
      {/* 🔍 Search & Filter */}
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Jodhpur
        </div>
        <div className="flex">
          <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowCircleLeft />
          </div>
          <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowCircleRight />
          </div>
        </div>
      </div>

      {}
      <div className="flex flex-wrap gap-5 overflow-hidden">
        {filtered.length > 0 ? (
          filtered.map((d, i) => <Card {...d} key={i} />)
        ) : (
          <p className="text-gray-500">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
