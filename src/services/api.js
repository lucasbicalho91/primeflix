
import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3
//URL da API: /movie/now_playing?api_key=f4bff4f5e72cd5895a1208b6c2065cbf&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;