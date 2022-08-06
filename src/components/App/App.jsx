// import { Container } from "./App.styled";
import { Routes, Route } from 'react-router-dom';
import Header from "components/Header";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";

const App = () => {
  return (<>
      <Header></Header>
      <Routes>        
          <Route path="/" element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path ="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
           <Route path ="*" element={<Home />} />
      </Routes>
    </>
   
  );
};


export default App;