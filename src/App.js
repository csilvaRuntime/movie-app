import "./App.css";
import PopularMovies from "./components/PopularMovies";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Welcome to YAMA</h1>
        <PopularMovies />
        <Footer />
      </header>
    </div>
  );
}

export default App;
