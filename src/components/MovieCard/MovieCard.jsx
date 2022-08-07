import { BsStarFill } from 'react-icons/bs';
import { MovieCardSt, WrapperMovieSt, VoteAverageSt, GenresSt, OverviewSt } from "./MovieCard.styled";
import Title from 'components/Title';

const MovieCard = ({ original_title, vote_average, overview, genres = [], poster_path }) => {
    
    const BASE_URL = "https://image.tmdb.org/t/p/w500"
    const photo = `${BASE_URL}${poster_path}`;
    

    return (<MovieCardSt>
        <img src={photo} alt=""/>
        <WrapperMovieSt>
            <Title text={original_title}></Title>        
            <VoteAverageSt><BsStarFill style={{ borderColor: "black", color: "orange" }} /> {vote_average}</VoteAverageSt>
            <GenresSt>{genres.map(el => el.name).join(', ')}</GenresSt>
            <OverviewSt>{ overview }</OverviewSt>
        </WrapperMovieSt>
        </MovieCardSt>
        
    )
}


export default MovieCard;