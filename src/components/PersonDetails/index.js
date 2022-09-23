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
import CircularProgress from "@mui/material/CircularProgress";
import Pages from "../shared/Pages";

const PersonDetails = () => {
  const { id } = useParams();
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [loadingTvShows, setLoadingTvShows] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const [personDetails, setPersonDetails] = useState({});

  useEffect(() => {
    getPersonDetails(id, setPersonDetails);
  }, [id]);

  const [personTvCredits, setPersonTvCredits] = useState([]);

  useEffect(() => {
    getPersonTvCredits(id, setPersonTvCredits, setLoadingTvShows);
  }, [id]);

  const [personMovieCredits, setPersonMovieCredits] = useState([]);

  useEffect(() => {
    getPersonMovieCredits(id, setPersonMovieCredits, setLoadingMovies);
  }, [id]);

  const indexLastRecord = currentPage * recordsPerPage;
  const indexFirstRecord = indexLastRecord - recordsPerPage;

  const currentRecords = personMovieCredits.slice(
    indexFirstRecord,
    indexLastRecord
  );

  const numberPages = Math.ceil(personMovieCredits.length / recordsPerPage);

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
      {loadingMovies ? (
        <CircularProgress />
      ) : (
        <div>
          <div className="MovieList">
            {currentRecords.map((movie) => (
              <Movie movie={movie} />
            ))}
          </div>
          <Pages
            numberPages={numberPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
      <h1>TV Shows</h1>
      {loadingTvShows ? (
        <CircularProgress />
      ) : (
        <div className="side-container">
          <div className="MovieList">
            {personTvCredits.map((tvShow) => (
              <TvShow tvShow={tvShow} />
            ))}
          </div>
          <Pages
            numberPages={numberPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default PersonDetails;
