import { useEffect } from "react";
import { getTrending } from 'service/movie-service';

const Home =  () => {

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const movies = await getTrending();
            }
            catch (error) {
                console.log(error.message);
            }
        }
     }, [])
    
    // const trendingMovies = await getTrending();
    // console.log("trendingMovies", trendingMovies);
    // trendingMovies.map(({title})=>console.log("title", title))

    return ( <h3>Home</h3>
        // <ul>
            // {trendingMovies.map(({ title }) => { return <li>{ title }</li>})}
        // </ul>        
    );
}

export default Home;