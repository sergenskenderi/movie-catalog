import MovieCard from "../MovieCard/MovieCard";
import "./movie-list.css";

const MoviesList = (props) => {
    const {movies} = props;
 return (
    <div className="movie_list_container">
     {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </div>
 )
}

export default MoviesList;