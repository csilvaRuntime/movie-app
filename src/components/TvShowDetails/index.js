import React, { useState, useEffect } from "react";
import {
  getTvShowDetails,
  getTvShowDetailsSeasons,
  getTvShowCredits,
} from "../shared/values";
import { useParams } from "react-router-dom";
import Person from "../Person";
import Header from "../Header";
import MoviePoster from "../../img/MoviePoster.png";

const TvShowDetails = () => {
  const { id } = useParams();
  const [tvShowDetails, setTvShowDetails] = useState({});

  useEffect(() => {
    getTvShowDetails(id, setTvShowDetails);
  }, [id]);

  const [tvShowDetailsSeasons, setTvShowDetailsSeasons] = useState([]);

  useEffect(() => {
    getTvShowDetailsSeasons(id, setTvShowDetailsSeasons);
  }, [id]);

  const [season, setSeason] = useState(1);

  console.log("season", season);

  const [tvShowCredits, setTvShowCredits] = useState([]);

  useEffect(() => {
    getTvShowCredits(id, season, setTvShowCredits);
  }, [id, season]);

  console.log("tvShowDetails", tvShowDetails);

  return (
    <div>
      <Header />
      <div className="container" key={tvShowDetails.id}>
        <div>
          <img
            class="PosterFocus"
            src={
              tvShowDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tvShowDetails.poster_path}`
                : MoviePoster
            }
            alt="tvShow poster"
          />
        </div>
        <div className="Text">
          <h1>{tvShowDetails.name}</h1>
          <p className="overview">
            <strong>Overview: </strong>
            {tvShowDetails.overview}
          </p>
        </div>
      </div>
      <div>
        <label>Select Season</label>
        <select onChange={(e) => setSeason(e.target.value)}>
          {tvShowDetailsSeasons?.length > 0 &&
            tvShowDetailsSeasons.map((season) => (
              <option key={season.id}>{season.season_number}</option>
            ))}
        </select>
      </div>
      <h1>Cast</h1>
      <div className="MovieList CastList">
        {tvShowCredits?.length > 0 &&
          tvShowCredits.map((person) => <Person person={person} />)}
      </div>
    </div>
  );
};

export default TvShowDetails;
