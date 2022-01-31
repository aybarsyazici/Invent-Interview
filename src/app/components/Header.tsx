import { FunctionComponent, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { RootState } from "../stores/store";
import {
  decrement,
  fetchMovies,
  increment,
  movieType,
  setDate,
  setLoading,
  setSearch,
  setType,
} from "../stores/movieSlice";
import Button from "./Button/Button";
import { Link } from "react-router-dom";
import { Grid } from ".";

interface HeaderProps {
  minimized: boolean;
  setMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FunctionComponent<HeaderProps> = ({
  minimized,
  setMinimized,
}) => {
  const dispatch = useDispatch();

  const headerCls = classnames("header", { "header--min": minimized });

  const { s, page, type, y } = useSelector((state: RootState) => state.movies);

  const handleSearch = () => {
    dispatch(fetchMovies());
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handlePageIncrement = () => {
    dispatch(setLoading(true));
    dispatch(increment());
    dispatch(fetchMovies());
  };

  const handlePageDecrement = () => {
    dispatch(setLoading(true));
    dispatch(decrement());
    dispatch(fetchMovies());
  };

  const handleTypeSelect = (type: movieType) => {
    setLoading(true);
    dispatch(setType(type));
    dispatch(fetchMovies());
  };

  const handleDateChange = (date: string) => {
    dispatch(setDate(date));
  };

  return (
    <header className={headerCls}>
      {minimized ? null : (
        <Link to="/">
          <Logo />
        </Link>
      )}
      <label className="header__label">
        Search for a movie by name:
        <input
          value={s}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        {/* <button onClick={()=>handleSearch()}>Search</button> */}
      </label>
      <label className="header__label">
        Page: {page}
        <span className="header__label__span">
          <AiOutlineArrowLeft onClick={(e) => handlePageDecrement()} />
          <AiOutlineArrowRight onClick={(e) => handlePageIncrement()} />
        </span>
      </label>
      <Grid gutter="md" className="header__buttons">
        <Grid.Row>
          <Grid.Col lg={6} xl={3}>
            <Button
              active={type === "movie"}
              onClick={(e) => handleTypeSelect("movie")}
            >
              Movie
            </Button>
          </Grid.Col>
          <Grid.Col lg={6} xl={3}>
            <Button
              active={type === "episode"}
              onClick={(e) => handleTypeSelect("episode")}
            >
              Episode
            </Button>
          </Grid.Col>
          <Grid.Col lg={6} xl={3}>
            <Button
              active={type === "series"}
              onClick={(e) => handleTypeSelect("series")}
            >
              Series
            </Button>
          </Grid.Col>
          <Grid.Col lg={6} xl={3}>
            <Button
              active={type === undefined}
              onClick={(e) => handleTypeSelect(undefined)}
            >
              All
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>

      <label className="header__label">
        Enter a date:
        <input value={y} onChange={(e) => handleDateChange(e.target.value)} />
      </label>

      <label className="header__label">
        Apply Name & Date
        <Button
          variant="secondary"
          active={false}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </label>
      {minimized ? (
        <AiOutlineArrowDown
          className="header__arrow"
          onClick={() => setMinimized(false)}
        />
      ) : (
        <AiOutlineArrowUp
          className="header__arrow"
          onClick={() => setMinimized(true)}
        />
      )}
    </header>
  );
};

export default Header;
