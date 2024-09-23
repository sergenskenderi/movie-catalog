import React from "react";
import "./movie-card.css"

const MovieCard = (props) => {
   const { movie } = props;
   const picture = movie?.Poster != "N/A" ? movie?.Poster : "https://crella.sfo2.cdn.digitaloceanspaces.com/wp-content/uploads/2019/09/23130937/woocommerce-placeholder.png"
   return (
      <div className="movie_card">
      <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank">
        <img src={picture} alt={movie.Title} className="movie_card_poster" />
      </a>
      <div className="movie_card_details_container">
         <div className="movie_card_detail">
            <p>Title: </p>
            <p className="movie_card_data">{movie.Title}</p>
         </div>
         <div className="movie_card_detail">
            <p>Category: </p>
            <p className="movie_card_data">{movie.Type}</p>
         </div>
         <div className="movie_card_detail">
            <p>Released year: </p>
            <p className="movie_card_data">{movie.Year}</p>
         </div>
      </div>
    </div>
   )
}

export default MovieCard