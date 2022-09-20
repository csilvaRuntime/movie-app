import React, {useState, useEffect} from "react";
import '../App.css';


function PopularMovies(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
    .catch(console.error);
  }, []);

    movies.length = 5;
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
export default PopularMovies;
