import './App.css';
import PopularMovies from './components/PopularMovies';
import SearchMovies from './components/SearchMovies';
import ShowMoviesSearch from './components/SearchMovies';
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchMovies/>
        <h1>
          Welcome to Movie App
        </h1>
        <PopularMovies />
{/*         <Route path="/moviesSearch">
          <ShowMoviesSearch />
        </Route> */}
        <p>
          By Catarina Silva
        </p>
      </header>
    </div>
  );
}

export default App;
