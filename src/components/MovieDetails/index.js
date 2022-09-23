import React, { useState, useEffect } from "react";
import { getMovieDetails, getMovieCredits } from "../shared/values";
import { useParams } from "react-router-dom";
import Person from "../Person";
import Header from "../Header";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setmovieDetails] = useState({});

  useEffect(() => {
    getMovieDetails(id, setmovieDetails);
  }, [id]);

  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(id, setMovieCredits);
  }, [id]);

  return (
    <div>
      <Header />
      <div className="container" key={movieDetails.id}>
        <div>
          <img
            class="PosterFocus"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt="movie poster"
          />
        </div>
        <div className="Text">
          <h1>{movieDetails.title}</h1>
          <p className="overview">
            <strong>Overview: </strong>
            {movieDetails.overview}
          </p>
        </div>
      </div>
      <h1>Cast</h1>
      <div className="MovieList CastList">
        {movieCredits.map((person) => (
          <Person person={person} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
