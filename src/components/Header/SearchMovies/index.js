import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

function SearchMovies() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          navigate({
            pathname: "/results",
            search: `?${createSearchParams({
              search: `${query}`,
            })}`,
          });
        }}
      >
        Search
      </button>
    </div>
  );
}
export default SearchMovies;
