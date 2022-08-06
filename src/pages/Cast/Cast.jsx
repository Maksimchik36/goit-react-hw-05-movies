import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastInformation } from "service/movie-service";
import { CastSt, ActorSt, NameSt, CharacterSt } from "./Cast.styled";
import ErrorMessage from "components/ErrorMessage";

const Cast = () => {
    const [castInformation, setCastInformation] = useState([]);

    const {movieId} = useParams(); 


    useEffect(() => {
        if (!movieId) {
            return;
        }
        
        // получает информацию о актере
        const getInformation = async () => {
            try {
                const {cast} = await getCastInformation(movieId);
                console.log("cast", cast);
                setCastInformation(cast)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getInformation();
     }, [movieId])

    const BASE_URL = `https://image.tmdb.org/t/p/w200`;
    
const isCastInformation = castInformation.length !== 0;

    return <>
    {isCastInformation ? <CastSt>{castInformation.map(({ character, original_name, profile_path }) => (<ActorSt key={original_name}>
           <img src={`${BASE_URL}${profile_path}`} alt={`Photo ${original_name}`} />
            <NameSt>{original_name}</NameSt>
            <CharacterSt>Character: {character}</CharacterSt>
        </ActorSt>))}</CastSt> : <ErrorMessage text="There is no information about the cast.">ErrorMessage</ErrorMessage>} </> 
}

export default Cast;