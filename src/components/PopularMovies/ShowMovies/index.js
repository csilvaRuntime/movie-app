import React from "react";
import "../../../App.css";
import Movie from "../../Movie";

const ShowMovies = ({ movies }) => {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};
export default ShowMovies;
