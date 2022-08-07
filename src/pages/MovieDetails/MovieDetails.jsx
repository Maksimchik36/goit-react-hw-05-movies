import { useState, useEffect } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "components/Button";
import MovieCard from "components/MovieCard";
import { WrapperMovieDetailsSt, NavLinkSt } from "./MovieDetails.styled";
import { InformationSt } from "./MovieDetails.styled";
import { getMovieInformation } from "service/movie-service";

const MovieDetails = () => {
    const [movieInformation, setMovieInformation] = useState('');
    
    const {movieId} = useParams(); 
    const navigate = useNavigate();
    const location = useLocation();

   
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
    
    const { original_title, vote_average, overview, genres, poster_path } = movieInformation;

        
    return <WrapperMovieDetailsSt>
        
            <Button type="button"
        onClick={() => {navigate(location?.state?.from?.pathname ?? '/')
        }} text="Go back"></Button>
        <MovieCard
            original_title={original_title}
            vote_average={vote_average}
            overview={overview}
            genres={genres}
            poster_path={poster_path}
        ></MovieCard>

        <InformationSt>Additional information:</InformationSt>
        <NavLinkSt to="cast">Cast</NavLinkSt>
        <NavLinkSt to="reviews">Reviews</NavLinkSt>
        <Outlet />
    </WrapperMovieDetailsSt>;
}

export default MovieDetails;