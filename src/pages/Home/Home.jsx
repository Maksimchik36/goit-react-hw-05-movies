import { useEffect } from "react";
import { getTrending } from '../../service/movie-service'

const Home = async () => {

    useEffect(() => { getTrending() }, [])
    
    const trendingMovies = await getTrending();
    console.log("trendingMovies", trendingMovies);
    trendingMovies.map(({title})=>console.log("title", title))

    return (
        <ul>
            {trendingMovies.map(({ title }) => { return <li>{ title }</li>})}
        </ul>        
    );
}

export default Home;