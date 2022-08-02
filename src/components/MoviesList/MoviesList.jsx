import { MoviesListSt } from "./MoviesList.styled";

const MoviesList = ({movies}) =>{
    return <MoviesListSt>
        {movies.map(({id, original_title}) => (<li key={id}>{original_title}</li>))}
    </MoviesListSt>

}

export default MoviesList;