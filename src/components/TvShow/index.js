import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const TvShow = ({ tvShow }) => {
  const navigate = useNavigate();

  return (
    <div key={tvShow.id} onClick={() => navigate(`/tvshow/${tvShow.id}`)}>
      <img
        className="Poster"
        src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
        alt="tvShow poster"
      />
      <Rating name="customized-10" max={10} value={tvShow.vote_average} />
      <p>{tvShow.name}</p>
    </div>
  );
};
export default TvShow;
