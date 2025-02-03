import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="movie-list">
      <h1>Сейчас в кино</h1>
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <Link to={`/sessions/${movie.id}`} className="btn">
              Выбрать сеанс
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}