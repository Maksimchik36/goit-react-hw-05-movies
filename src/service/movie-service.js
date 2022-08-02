import axios from 'axios';

const API_KEY = '2af9cbb95e748f3536884b81d35f838b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'; // австоматически подставляется в путь при запросе

// получает список самых популярных фильмов
export const getTrending = async () => {
    try {
        const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
        console.log("data.results", data.results);
        return data.results;
    }
    catch(error) {
        console.log("error", error);
    }
    finally {
        console.log("finally");        
    }
}

// осуществляет поиск кинофильма по ключевому слову
export const getMovieByName = async (query) => {
    try {
        const {data} = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
        console.log("data.results", data.results);
        return data.results;
    }
    catch(error) {
        console.log("error", error);
    }
    finally {
        console.log("finally");        
    }
}

// получает полную информацию о фильме
export const getMovieInformation = async (movie_id) => {
    try {
        const {data} = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
        console.log("data.results", data.results);
        return data.results;
    }
    catch(error) {
        console.log("error", error);
    }
    finally {
        console.log("finally");        
    }
}

// получает информацию о актёрском составе фильма
export const getCastInformation = async (movie_id) => {
    try {
        const {data} = await axios.get(`/movie/${movie_id}/credits?api_key=${API_KEY}`);
        console.log("data.results", data.results);
        return data.results;
    }
    catch(error) {
        console.log("error", error);
    }
    finally {
        console.log("finally");        
    }
}

// получает обзоры
export const getMovieReviews = async (movie_id) => {
    try {
        const {data} = await axios.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}`);
        console.log("data.results", data.results);
        return data.results;
    }
    catch(error) {
        console.log("error", error);
    }
    finally {
        console.log("finally");        
    }
}