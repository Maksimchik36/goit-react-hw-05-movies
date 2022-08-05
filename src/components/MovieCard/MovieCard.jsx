import { BsStarFill } from 'react-icons/bs';
import { MovieCardSt, TitleSt, VoteAverageSt, GenresSt, OverviewSt } from "./MovieCard.styled"

const MovieCard = ({ original_title, vote_average, overview, genres = [], poster_path }) => {
    
    const BASE_URL = "https://image.tmdb.org/t/p/w500"
    const photo = `${BASE_URL}${poster_path}`;
    

    return (<MovieCardSt>
        <TitleSt>{original_title}</TitleSt>
        <img src={photo} alt="photo"/>
        <VoteAverageSt><BsStarFill style={{borderColor: "black",color: "orange"}}/> {vote_average}</VoteAverageSt>
        <p>{genres.map(el => el.name).join(', ')}</p>
        <OverviewSt>{ overview }</OverviewSt>
        </MovieCardSt>
        
    )
}

export default MovieCard;