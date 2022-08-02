import axios from 'axios';

const API_KEY = '2af9cbb95e748f3536884b81d35f838b';
const BASE_URL = 'https://api.themoviedb.org/3/';

// пример API-запроса  https://api.themoviedb.org/3/movie/550?api_key=2af9cbb95e748f3536884b81d35f838b


export async function getTrending () {
    try {
        const { data } = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
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


export async function getMovieByName (query) {
    try {
        const {data} = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
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


export async function getMovieInformation (movie_id) {
    try {
        const {data} = await axios.get(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`);
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


export async function getCastInformation (movie_id) {
    try {
        const {data} = await axios.get(`${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`);
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


export async function getMovieReviews (movie_id) {
    try {
        const {data} = await axios.get(`${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}`);
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