import React, { useState } from "react";
import ShowMovies from "./ShowMovies";
import {useNavigate} from 'react-router-dom';

function SearchMovies(){
  const [query, setQuery] = useState("");
  const [moviesSearch, setMoviesSearch] = useState([]);

  const handleInput = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e43efe34368e4b8cda0646bf31b0d7e5&language=en-US&page=1&include_adult=false&query=${query}`)
    .then(response => response.json())
    .then(data => setMoviesSearch(data.results))
    .catch(console.error);
  }

  return (
    <div>
      <input type="text" placeholder="Search Movie" onChange={e => setQuery(e.target.value)} />
      <button onClick={() => handleInput()}>Search</button>
      {moviesSearch?.length > 0 &&
        <div className = "MovieList">
            {moviesSearch.map(movie =>
              <div key={movie.id}>
                <img className="Poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
                <p>{movie.title}</p>
              </div>
            )}
        </div>
      }
    </div>
  )
}
export default SearchMovies;
