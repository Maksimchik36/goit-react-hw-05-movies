
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "components/Header";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
import Loader from 'components/Loader';
// import Cast from "pages/Cast";
// import Reviews from "pages/Reviews";

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../../pages/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews'));

const App = () => {
  return (<>
      <Header></Header>
    <Suspense fallback={<Loader />}>
      <Routes>        
          <Route path="/" element={<Home />} />
          <Route path ="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path ="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
           <Route path ="*" element={<Home />} />
      </Routes>
    </Suspense>
    </>
   
  );
};


export default App;