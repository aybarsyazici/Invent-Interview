import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { environment } from "../../environment/environment";
import { Movie } from "../types/movie";

interface MovieDetailProps { }

const MovieDetail: FunctionComponent<MovieDetailProps> = () => {
  const params = useParams();

  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    Axios.get(environment.apiUrl, { params: { i: params.movieId } })
      .then((res) => {
        if (res.data.Response === "False") {
          return;
        }
        setMovie(res.data);
      })
      .catch();
  }, []);

  const scoreColor = movie
    ? Number(movie.imdbRating) > 8
      ? "green"
      : Number(movie.imdbRating) > 5
        ? "orange"
        : "red"
    : "null";

  return (
    <>
      {movie !== undefined ? (
        <div className="movieDetail">
          <div className="movieDetail__leftCol">
            <img src={movie.Poster} alt={movie.imdbID} />
          </div>
          <div className="movieDetail__rightCol">
            <div className="movieDetail__rightCol__wrapper">
              <div className="movieDetail__rightCol__wrapper__header">
                <div className="movieDetail__rightCol__wrapper__header__title">
                  <h2>{movie.Title}</h2>
                  <div className="movieDetail__rightCol__wrapper__header__title__flex">
                    <p>{movie.imdbVotes} votes</p>
                    <p>{movie.Year} </p>
                    <p>{movie.Runtime} </p>
                    <p>{movie.Genre} </p>
                    <p>{movie.Type}</p>
                  </div>
                </div>
                <div
                  className={
                    "movieDetail__rightCol__wrapper__header__score movieDetail__rightCol__wrapper__header__score--" +
                    scoreColor
                  }
                >
                  <div className="movieDetail__rightCol__wrapper__header__score__inner">
                    {movie.imdbRating}
                  </div>
                </div>
              </div>
              <div className="movieDetail__rightCol__wrapper__content">
                <h3>Actors: {movie.Actors}</h3>
                <h3>Country: {movie.Country}</h3>
                <h3>Website: {movie.Website}</h3>
                <h3>Writer: {movie.Writer}</h3>
                <h3>Director: {movie.Director}</h3>
                <h3>Ratings: </h3>
                <ul className="movieDetail__rightCol__wrapper__content__ratings">
                  {movie.Ratings &&
                    movie.Ratings.map((rating) => (
                      <li key={rating.Source}>
                        {rating.Source}:{rating.Value}
                      </li>
                    ))}
                </ul>
                <h3>Website: {movie.Website}</h3>
                <h3>Language: {movie.Language}</h3>
                <h3>Awards: {movie.Awards}</h3>
                <h3>Rated: {movie.Rated}</h3>
                <h3>Plot: {movie.Plot + "..."}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Could not find a movie with this id :( </p>
      )}
    </>
  );
};

export default MovieDetail;
