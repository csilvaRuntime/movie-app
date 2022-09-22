import React, { useState, useEffect } from "react";
import {
  getTvShowDetails,
  getTvShowDetailsSeasons,
  getTvShowCredits,
} from "../shared/values";
import { useParams } from "react-router-dom";
import Person from "../Person";
import Header from "../Header";

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
      <div className="App App-header" key={tvShowDetails.id}>
        <div>
          <h3>{tvShowDetails.name}</h3>
          <img
            className="Poster"
            src={`https://image.tmdb.org/t/p/w500/${tvShowDetails.poster_path}`}
            alt="movie poster"
          />
          <div className="boxed">
            <p>{tvShowDetails.overview}</p>
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
    </div>
  );
};

export default TvShowDetails;
