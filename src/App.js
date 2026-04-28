import React, { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "Interstellar", year: 2014 },
    { id: 3, title: "The Dark Knight", year: 2008 }
  ]);

  const [newMovie, setNewMovie] = useState("");
  const [year, setYear] = useState("");

  const addMovie = () => {
    if (newMovie && year) {
      setMovies([
        ...movies,
        { id: movies.length + 1, title: newMovie, year }
      ]);
      setNewMovie("");
      setYear("");
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie List</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Movie name"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;