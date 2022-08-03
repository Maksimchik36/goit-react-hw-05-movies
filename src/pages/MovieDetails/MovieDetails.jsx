import { useState, useEffect } from "react";
import Button from "components/Button";
import MovieCard from "components/MovieCard";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";
import { getMovieInformation } from "service/movie-service";

const MovieDetails = () => {
    const [isMovieOpen, setIsMovieOpen] = useState(false); // открыто ли окно с фильмом
    const [isCastLoad, setIsCastLoad] = useState(false); // подгружен ли актерский состав
    const [isReviews, setIsReviews] = useState(false);  // подгружены ли отзывы


    useEffect(() => {
        
        // получает информацию о фильме
        const getInformation = async (event) => {
            try {
                const information = await getMovieInformation(event.target.id);
                setIsMovieOpen(true);
                console.log(information);
                
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getInformation();
     }, [])
    

    return <>
        <h3>MovieDetails</h3>
        {isMovieOpen && <Button text="Go back"></Button>}
        <MovieCard></MovieCard>
        {isCastLoad && <Cast></Cast>}
        {isReviews && <Reviews></Reviews>}
    </>;
}

export default MovieDetails;