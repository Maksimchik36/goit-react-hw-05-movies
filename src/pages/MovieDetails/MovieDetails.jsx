import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "components/Button";
import MovieCard from "components/MovieCard";
import { WrapperMovieDetailsSt } from "./MovieDetails.styled";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";
import { getMovieInformation } from "service/movie-service";

const MovieDetails = () => {
    const [movieInformation, setMovieInformation] = useState('');
    const [isCastLoad, setIsCastLoad] = useState(true); // подгружен ли актерский состав
    const [isReviews, setIsReviews] = useState(false);  // подгружены ли отзывы

    const {movieId} = useParams(); 


    useEffect(() => {
        if (!movieId) {
            return;
        }
        
        // получает информацию о фильме
        const getInformation = async () => {
            try {
                const information = await getMovieInformation(movieId);
                // console.log("information", information);
                setMovieInformation(information)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getInformation();
     }, [movieId])
    
    
    return <WrapperMovieDetailsSt>
        {movieInformation && <Button text="Go back"></Button>}
        <MovieCard dataMovie={movieInformation}></MovieCard>
        {isCastLoad && <Cast>Cast</Cast>}
        {isReviews && <Reviews></Reviews>}
    </WrapperMovieDetailsSt>;
}

export default MovieDetails;