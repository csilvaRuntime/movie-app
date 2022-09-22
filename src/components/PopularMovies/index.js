import React, { useState, useEffect } from "react";
import "../../App.css";
import { getPopularMovies } from "../shared/values";
import ShowMovies from "./ShowMovies";

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies(setMovies);
  }, []);

  const topFivePopularMovies = movies.slice(0, 5);

  return (
    <div className="MovieList">
      {topFivePopularMovies?.length > 0 && (
        <div>
          <ShowMovies movies={topFivePopularMovies} />
        </div>
      )}
    </div>
  );
}
export default PopularMovies;
