import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  console.log(movie);

  return (
    <div key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        className="Poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="movie poster"
      />
      <Rating name="customized-10" max={10} value={movie.vote_average} />
      <p>{movie.title}</p>
    </div>
  );
};
export default Movie;
