import React, { useState, useEffect } from "react";
import {
  getPersonDetails,
  getPersonTvCredits,
  getPersonMovieCredits,
} from "../shared/values";
import { useParams } from "react-router-dom";
import Movie from "../Movie";
import TvShow from "../TvShow";
import Header from "../Header";
import Avatar from "../../img/Avatar.png";

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
    <div>
      <Header />
      <div className="container" key={personDetails.id}>
        <div>
          <img
            class="Poster"
            src={
              personDetails.profile_path
                ? `https://image.tmdb.org/t/p/w500/${personDetails.profile_path}`
                : Avatar
            }
            alt="person poster"
          />
        </div>
        <div className="Text-Person">
          <h1>{personDetails.name}</h1>
          <p className="overview">
            <strong>Biography: </strong>
            {personDetails.biography}
          </p>
        </div>
      </div>
      <h1>Movies</h1>
      <div className="side-container">
        <div className="MovieList">
          {personMovieCredits.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      </div>
      <h1>TV Shows</h1>
      <div className="side-container">
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
