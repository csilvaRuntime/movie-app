import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import ShowMoviesSearch from "./components/ShowMoviesSearch";
import TvShowDetails from "./components/TvShowDetails";
import PersonDetails from "./components/PersonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "results",
    element: <ShowMoviesSearch />,
  },
  {
    path: "movie/:id",
    element: <MovieDetails />,
  },
  {
    path: "tvshow/:id",
    element: <TvShowDetails />,
  },
  {
    path: "person/:id",
    element: <PersonDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
