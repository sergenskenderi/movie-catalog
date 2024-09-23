import "./movie-filters.css"

const MoviesFilters = (props) => {
    const {query, setQuery} = props;
    return (
        <div className="movie_filters">
        <input
        type="text"
        value={query}
        className="movie_filters_input"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie title..."
         />
        </div>
    )
}

export default MoviesFilters;