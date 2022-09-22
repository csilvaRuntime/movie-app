export function getPopularMovies(setMovies) {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) => setMovies(data.results))
    .catch(console.error);
}

export function getMovieDetails(movie_id, setmovieDetails) {
  fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setmovieDetails(data))
    .catch(console.error);
}

export async function getMoviesSearch(query, setMoviesSearch) {
  await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  )
    .then((response) => response.json())
    .then((data) => setMoviesSearch(data.results))
    .catch(console.error);
}

export function getTvShowDetails(tvShow_id, setTvShowDetails) {
  fetch(
    `https://api.themoviedb.org/3/tv/${tvShow_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setTvShowDetails(data))
    .catch(console.error);
}

export function getTvShowDetailsSeasons(tvShow_id, setTvShowDetailsSeasons) {
  fetch(
    `https://api.themoviedb.org/3/tv/${tvShow_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setTvShowDetailsSeasons(data.seasons))
    .catch(console.error);
}

export function getTvShowCredits(tv_id, season_id, setTvShowCredits) {
  fetch(
    `https://api.themoviedb.org/3/tv/${tv_id}/season/${season_id}/aggregate_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setTvShowCredits(data.cast))
    .catch(console.error);
}

export function getMovieCredits(movie_id, setMovieCredits) {
  fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setMovieCredits(data.cast))
    .catch(console.error);
}

export function getPersonDetails(person_id, setPersonDetails) {
  fetch(
    `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setPersonDetails(data))
    .catch(console.error);
}

export function getPersonTvCredits(person_id, setPersonTvCredits) {
  fetch(
    `https://api.themoviedb.org/3/person/${person_id}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setPersonTvCredits(data.cast))
    .catch(console.error);
}

export function getPersonMovieCredits(person_id, setPersonMovieCredits) {
  fetch(
    `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => setPersonMovieCredits(data.cast))
    .catch(console.error);
}
