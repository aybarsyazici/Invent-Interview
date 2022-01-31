import Layout from './components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from './stores/store';
import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MovieList from './views/MovieList';
import MovieDetail from './views/MovieDetail';



function App() {

  const { movieList, loading } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    console.log("a", movieList);
  }, [movieList])
  

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MovieList movieList={movieList} loading={loading} />} />
          <Route path="/movie/:movieId" element={<MovieDetail/>}>

          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
