import { useEffect, useState } from "react";
import { fetchData } from "../api";
import MoviesFilters from "./MoviesFilters/MoviesFilters";
import MoviesList from "./MoviesList/MoviesList";
import EmptyList from "../EmptyList/EmptyList";
import { debounce } from "../utilites/helpers";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Loading from "../Loading/Loading";

const MoviesController = () => {
    const [query, setQuery] = useState("");
    const [title, setTitle] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const handleTitleChange = (query) => {
        setTitle(query)
    }

    const fetchMovies = async (searchQuery) => {    
        if (searchQuery === "") {
          setMovies([]);
          return;
        }
        setIsLoading(true);
        try {
            const response = await fetchData({s: title}); 
            if(response.data?.Response === "True") {
                setMovies(response.data.Search.slice(0, 3));
                setError('');
            } 
            if(response.data?.Response === "False") {
                setError(response.data?.Error)
                setMovies([]);
            }
        } catch (err) {
          setError('An error occurred while fetching data.');
        } finally {
            setIsLoading(false);
        }
    };

    const debouncedMovieTitle = debounce(handleTitleChange, 1000);

    useEffect(() => {
        debouncedMovieTitle(query);
        return () => {
          debouncedMovieTitle.cancel();
        };
      }, [query]);
    
      useEffect(() => {
        fetchMovies(title);
      }, [title]);

    return (
        <div>
            <MoviesFilters query={query} setQuery={setQuery} />
            {error && !isLoading ? (
                <ErrorComponent message={error} image="https://cdni.iconscout.com/illustration/premium/thumb/something-went-wrong-illustration-download-in-svg-png-gif-file-formats--error-popup-character-communication-empty-state-pack-design-development-illustrations-3613890.png?f=webp" />
            ) : isLoading ? (
                <Loading />
            ) : movies.length ? (
                <MoviesList movies={movies} />
            ) : (
                <EmptyList query={query} image="https://cdni.iconscout.com/illustration/premium/thumb/empty-list-illustration-download-in-svg-png-gif-file-formats--page-not-found-lost-space-404-state-pack-design-development-illustrations-1763834.png" />
            )} 
        </div>
    )
}

export default MoviesController;