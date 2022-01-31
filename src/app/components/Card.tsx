import { FunctionComponent } from "react";
import { MovieSummary } from "../types/movie";
import classnames from "classnames";
import {useNavigate} from 'react-router-dom';

interface CardProps {
  movie: MovieSummary;
}

const Card: FunctionComponent<CardProps> = ({ movie }) => {
  const cardCls = classnames("card");

  const navigate = useNavigate();

  return (
      <div className={cardCls} onClick={()=>navigate("/movie/"+movie.imdbID)}>
        <img src={movie.Poster} alt={movie.Title} className="card__poster" />
        <div className="card__info">
          <h3>{movie.Title}</h3>
          <h3>Type: {movie.Type}</h3>
          <h3>Year: {movie.Year}</h3>
          <h3>ID: {movie.imdbID}</h3>
        </div>
      </div>
  );
};

export default Card;
