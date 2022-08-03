import { Link } from "react-router-dom";
import { MoviesListSt } from "./MoviesList.styled";

const MoviesList = ({movies}) =>{
    return <MoviesListSt>
        {movies.map(({id, original_title}) => (<li key={id}><Link to={`/movies/${id}`} id={id} style={{ display: "block" }}>{original_title}</Link></li>))}
    </MoviesListSt>

}

export default MoviesList;