import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastInformation } from "service/movie-service";
import CastList from "components/CastList";

const Cast = () => {
    const [castInformation, setCastInformation] = useState('');

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

    return <CastList dataCast={castInformation} >Cast</CastList>;
}

export default Cast;