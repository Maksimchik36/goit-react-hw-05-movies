import { Link, useLocation } from "react-router-dom";
import { MoviesListSt, MovieSt } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return <MoviesListSt>
        {movies.map(({ id, original_title }) => (<MovieSt key={id}><Link to={`/movies/${id}`} id={id} state={{ from: location }} style={{ display: "block" }}>{original_title}</Link></MovieSt>))}
    </MoviesListSt>
}

export default MoviesList;