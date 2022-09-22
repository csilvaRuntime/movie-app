import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import MoviePoster from "../../img/MoviePoster.png";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  console.log(movie);

  return (
    <div>
      <div
        className="Clickable"
        key={movie.id}
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <img
          className="Poster"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : MoviePoster
          }
          alt="movie poster"
        />
        <Rating
          name="customized-10"
          max={10}
          value={movie.vote_average}
          readOnly
        />
        <p>{movie.title}</p>
      </div>
    </div>
  );
};
export default Movie;
