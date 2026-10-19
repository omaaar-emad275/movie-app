
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(import.meta.env.VITE_TMDB_API_KEY);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: import.meta.env.VITE_TMDB_API_KEY,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
.catch((error) => {
  console.log(error.response?.data || error.message);
  setLoading(false);
});
  }, []);

  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  return (
    <div className="home">
      <h1>Popular Movies</h1>

      <div className="movies">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            className="movie-card"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average.toFixed(1)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
