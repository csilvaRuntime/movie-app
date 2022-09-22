import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import MoviePoster from "../../img/MoviePoster.png";

const TvShow = ({ tvShow }) => {
  const navigate = useNavigate();

  return (
    <div
      className="Clickable"
      key={tvShow.id}
      onClick={() => navigate(`/tvshow/${tvShow.id}`)}
    >
      <img
        className="Poster"
        src={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : MoviePoster
        }
        alt="tvShow poster"
      />
      <Rating name="customized-10" max={10} value={tvShow.vote_average} />
      <p>{tvShow.name}</p>
    </div>
  );
};
export default TvShow;
