// import { Container } from "./App.styled";
import { Routes, Route } from 'react-router-dom';
import Layout from "components/Layout";
import Home from "components/Home";
import Movies from "components/Movies";
import MovieDetails from "components/MovieDetails";
import Cast from "components/Cast";
import Reviews from "components/Reviews";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path ="movies/:movieId/cast" element={<Cast />} />
          <Route path ="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>      
        {/* <Route path ="*" element={<Home />} /> */}

      </Routes>
   
  );
};


export default App;