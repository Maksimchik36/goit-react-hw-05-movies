import { Link, useLocation } from "react-router-dom";
import { MoviesListSt } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return <MoviesListSt>
        {movies.map(({id, original_title}) => (<li key={id}><Link to={`/movies/${id}`} id={id} state={{from:location}} style={{ display: "block" }}>{original_title}</Link></li>))}
    </MoviesListSt>

}

export default MoviesList;