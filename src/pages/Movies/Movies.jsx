import { useState, useEffect } from "react";
import Form from "components/Form";
import { getMovieByName } from '../../service/movie-service';
import MoviesList from "components/MoviesList";
import { MoviesSt } from "./Movies.styled";

const Movies = () => {
    const [query, setQuery] = useState('');  // значение запроса
    const [movies, setMovies] = useState([]); // массив фильмов
    

    useEffect(() => {
        if (query === '') {
            return;
        }
        // получает один фильм или список фильмов по запросу
        const getMoviesList = async () => {
            try {
                const moviesArray = await getMovieByName(query);
                if (moviesArray.length !== 0) {
                    setMovies(moviesArray);
                }
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getMoviesList();
     }, [query])

    
    // перезаписывает значение query в state (Movies)
const onSubmit = (query) => {
      setQuery(query);
    }
        

    return (<MoviesSt>    
        {<Form onSubmit={onSubmit}></Form>}

        {movies && <MoviesList movies={movies}></MoviesList>}
        </MoviesSt>    
    );
}

export default Movies;