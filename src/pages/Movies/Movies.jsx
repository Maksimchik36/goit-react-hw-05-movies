import { useState, useEffect } from "react";
import Form from "components/Form";
import Button from "components/Button";
import { getMovieByName } from '../../service/movie-service';
import MoviesList from "components/MoviesList";

const Movies = () => {
    const [query, setQuery] = useState('');  // значение запроса
    const [movies, setMovies] = useState([]); // массив фильмов
    const [isMovieOpen, setIsMovieOpen] = useState(false); // открыто ли окно с фильмом
    const [isCastLoad, setIsCastLoad] = useState(false); // подгружен ли актерский состав
    const [isReviews, setIsReviews] = useState(false);  // подгружены ли отзывы

    useEffect(() => {
        if (query === '') {
            return;
        }

        const getMovieData = async () => {
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
        getMovieData();
     }, [query])

    
    // перезаписывает значение query в state (Movies)
const onSubmit = (query) => {
      setQuery(query);
    }
    
    

    return (<>
        <h3>Movies</h3>
        
        {<Form onSubmit={onSubmit}></Form>}
        
        {isMovieOpen && <Button text="Go back"></Button>}

        {movies && <MoviesList movies={movies}></MoviesList>}
        </>    
    );
}

export default Movies;