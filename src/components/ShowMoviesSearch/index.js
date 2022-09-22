import React, { useState, useEffect } from "react";
import "../../App.css";
import { useSearchParams } from "react-router-dom";
import Movie from "../Movie";
import TvShow from "../TvShow";
import Person from "../Person";
import { getMoviesSearch } from "../shared/values";
import Header from "../Header";

export function ShowMoviesSearch() {
  let [searchParams] = useSearchParams();
  const [multiSearch, setMultiSearch] = useState([]);
  const input = searchParams.get("search");

  useEffect(() => {
    getMoviesSearch(input, setMultiSearch);
  }, [input]);

  const moviesSearch = multiSearch.filter(
    (movie) => movie.media_type === "movie"
  );
  const topFiveMoviesSearch = moviesSearch.slice(0, 5);

  const tvShowSearch = multiSearch.filter(
    (tvShow) => tvShow.media_type === "tv"
  );
  const topFiveTvShowsSearch = tvShowSearch.slice(0, 5);

  const peopleSearch = multiSearch.filter(
    (person) => person.media_type === "person"
  );
  const topFivePeopleSearch = peopleSearch.slice(0, 5);

  return (
    <div>
      <Header />
      <h1 className="Title">Movies</h1>
      <div className="MovieList">
        {topFiveMoviesSearch.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
      <h1 className="Title">TV Shows</h1>
      <div className="MovieList">
        {topFiveTvShowsSearch.map((tvShow) => (
          <TvShow tvShow={tvShow} />
        ))}
      </div>
      <h1 className="Title">People</h1>
      <div className="MovieList">
        {topFivePeopleSearch.map((person) => (
          <Person person={person} />
        ))}
      </div>
    </div>
  );
}
export default ShowMoviesSearch;
