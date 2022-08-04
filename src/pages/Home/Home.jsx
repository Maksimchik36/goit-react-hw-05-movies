// import MovieDetails from "pages/MovieDetails";
import { useState, useEffect } from "react";
import { getTrending } from 'service/movie-service';
import Title from "components/Title";
import MoviesList from "components/MoviesList";
import { WrapperHomeSt } from "./Home.styled";

const Home =  () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const movies = await getTrending();
                setMovies(movies);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getPopularMovies();
     }, [])
    
    
    return (<WrapperHomeSt>
        <Title text="Trending today"></Title>
        <MoviesList movies={movies}></MoviesList></WrapperHomeSt>                  
    );
}

export default Home;