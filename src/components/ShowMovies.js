import React from "react";
import '../App.css';

function ShowMovies(movies){

    return (
      <div className = "MovieList">
        {movies.map(movie =>
          <div key={movie.id}>
            <img className="Poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
            <p>{movie.title}</p>
          </div>
      )}
    </div>
    )

}
export default ShowMovies;
