import React, { useState, useEffect } from "react";
import {
  getPersonDetails,
  getPersonTvCredits,
  getPersonMovieCredits,
} from "../shared/values";
import { useParams } from "react-router-dom";
import ShowMovies from "../PopularMovies/ShowMovies";
import TvShow from "../TvShow";

const PersonDetails = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState({});

  useEffect(() => {
    getPersonDetails(id, setPersonDetails);
  }, [id]);

  const [personTvCredits, setPersonTvCredits] = useState([]);

  useEffect(() => {
    getPersonTvCredits(id, setPersonTvCredits);
  }, [id]);

  const [personMovieCredits, setPersonMovieCredits] = useState([]);

  useEffect(() => {
    getPersonMovieCredits(id, setPersonMovieCredits);
  }, [id]);

  console.log("personTvCredits", personTvCredits);

  return (
    <div className="App" key={personDetails.id}>
      <h3>{personDetails.name}</h3>
      <img
        className="Poster"
        src={`https://image.tmdb.org/t/p/w500/${personDetails.profile_path}`}
        alt="movie poster"
      />
      <div className="boxed">
        <p>{personDetails.biography}</p>
      </div>
      <div>
        <h1>Movies</h1>
        <ShowMovies movies={personMovieCredits} />
      </div>
      <div>
        <h1>TV Shows</h1>
        <div className="MovieList">
          {personTvCredits.map((tvShow) => (
            <TvShow tvShow={tvShow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
