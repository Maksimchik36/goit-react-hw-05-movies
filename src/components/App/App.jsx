// import { Container } from "./App.styled";
import { Routes, Route } from 'react-router-dom';
import Layout from "components/Layout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path ="cast" element={<Cast />} />
          <Route path ="reviews" element={<Reviews />} />
        </Route>      
        <Route path ="*" element={<Home />} />
        </Route>
        

      </Routes>
   
  );
};


export default App;