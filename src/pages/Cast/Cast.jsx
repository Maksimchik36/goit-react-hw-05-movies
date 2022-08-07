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
    
    const isCastInformation = castInformation.length !== 0; // буль - есть ли инфомация о актёрском составе
    // заглушка на фото при  отсутствии фото актера
    const neutralActorCard ="data:image/png;base64,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"


    return <>
        {isCastInformation ? <CastSt>{castInformation.map(({ character, original_name, profile_path }) => {
            const imgSrc = profile_path ? `${BASE_URL}${profile_path}` : neutralActorCard;
            return <ActorSt key={original_name}>
                <img src={imgSrc} alt=""/>
            <NameSt>{original_name}</NameSt>
            <CharacterSt>Character: {character}</CharacterSt>
        </ActorSt>
    })}</CastSt> : <ErrorMessage text="There is no information about the cast."></ErrorMessage>} </> 
}

export default Cast;