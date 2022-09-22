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
      <div className="App" key={movieDetails.id}>
        <h3>{movieDetails.title}</h3>
        <img
          className="Poster"
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="movie poster"
        />
        <div className="boxed">
          <p>{movieDetails.overview}</p>
        </div>
        <div>
          <h1>Cast</h1>
          <div className="MovieList CastList">
            {movieCredits.map((person) => (
              <Person person={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
