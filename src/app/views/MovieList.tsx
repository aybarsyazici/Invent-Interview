import { FunctionComponent } from "react";
import { Grid } from "../components";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { MovieSummary } from "../types/movie";

interface MovieListProps {
  loading: boolean;
  movieList: MovieSummary[];
}

const MovieList: FunctionComponent<MovieListProps> = ({
  loading,
  movieList,
}) => {
  return (
    <Grid>
      <Grid.Row>
        {loading ? (
          <Loader />
        ) : movieList ? (
          movieList.map((movie) => (
            <Grid.Col lg={6} md={12} key={movie.imdbID}>
              <div style={{ padding: "1em", width: "100%" }}>
                <Card movie={movie} />
              </div>
            </Grid.Col>
          ))
        ) : (
          <p>no movies!</p>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default MovieList;
