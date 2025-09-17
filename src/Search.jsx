import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const input = searchQuery.trim().toLowerCase();

    // Decide which page to navigate
    let page = "/";
    if (input.includes("veg") || ["tomato", "potato"].includes(input)) page = "/veg";
    else if (input.includes("nonveg") || ["chicken", "mutton"].includes(input)) page = "/nonveg";
    else if (input.includes("milk") || ["milk", "curd", "badamMilk"].includes(input)) page = "/milk";
    else if (input.includes("drinks") || ["juice", "soda"].includes(input)) page = "/drinks";
    else if (input.includes("chocolate") || ["kitkat", "dairy milk"].includes(input)) page = "/chocolate";

    // Navigate with query param
    navigate(`${page}?search=${encodeURIComponent(input)}`);

    setSearchQuery(""); // clear input
  };

  return (
    <form className="d-flex search-bar" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search products..."
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
